import { FaBrain, FaPaperPlane, FaTimes } from 'react-icons/fa';
import ReactMarkdown from 'react-markdown';
import { useState, useRef, useEffect } from 'react';
import remarkGfm from 'remark-gfm';
import BotAvatar from '../../assets/images/about.jpg';
import './Chatbot.css';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { type: 'bot', text: 'Hi! I am the Shimal Profile assistant. How can I help you today?' }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSend();
        }
    };

    const handleSend = async () => {
        if (!inputValue.trim()) return;

        const userMessage = inputValue.trim();
        setMessages((prev) => [...prev, { type: 'user', text: userMessage }]);
        setInputValue('');
        setIsLoading(true);

        try {
            const response = await fetch('https://portfolio-1-p1h7.onrender.com/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: userMessage }),
            });

            let data;
            const contentType = response.headers.get("content-type");
            if (contentType && contentType.includes("application/json")) {
                try {
                    data = await response.json();
                } catch (e) {
                    console.error("JSON parse error", e);
                }
            }

            if (!response.ok) {
                // Use the error message from server if available
                throw new Error(data?.error || `Server Error: ${response.status}`);
            }

            const botResponse = data?.response || "I received your message, but I'm not sure how to respond properly yet.";

            setMessages((prev) => [...prev, { type: 'bot', text: botResponse }]);
        } catch (error) {
            console.error('Error sending message:', error);
            setMessages((prev) => [
                ...prev,
                { type: 'bot', text: error.message || "Sorry, I'm having trouble connecting to the server right now. Please try again later." },
            ]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="chatbot-container">
            {isOpen && (
                <div className="chatbot-window">
                    <div className="chatbot-header">
                        <div className="chatbot-title">
                            <img src={BotAvatar} alt="Assistant" className="chatbot-icon" />
                            <span>Assistant</span>
                        </div>
                        <button className="chatbot-close" onClick={toggleChat}>
                            <FaTimes />
                        </button>
                    </div>
                    <div className="chatbot-messages">
                        {messages.map((msg, index) => (
                            <div key={index} className={`message ${msg.type}`}>
                                <div className="message-content">
                                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                        {msg.text}
                                    </ReactMarkdown>
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                            <div className="message bot">
                                <div className="message-content typing-indicator">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>
                    <div className="chatbot-input-area">
                        <input
                            type="text"
                            placeholder="Ask me anything..."
                            value={inputValue}
                            onChange={handleInputChange}
                            onKeyPress={handleKeyPress}
                            disabled={isLoading}
                        />
                        <button onClick={handleSend} disabled={isLoading || !inputValue.trim()}>
                            <FaPaperPlane />
                        </button>
                    </div>
                </div>
            )}
            <button className="chatbot-toggle" onClick={toggleChat}>
                {isOpen ? <FaTimes /> : <FaBrain />}
            </button>
        </div>
    );
};

export default Chatbot;
