import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  Bot,
  Briefcase,
  Calendar,
  Camera,
  Check,
  Coffee,
  Gamepad2,
  GraduationCap,
  Heart,
  Loader2,
  Mail,
  Map,
  MapPin,
  MessageCircle,
  Music,
  Paperclip,
  PhoneCall,
  Play,
  Send,
  Sparkles,
  Utensils,
  UserPlus,
  Volume2,
  VolumeX,
  X,
} from "lucide-react";

const personalInfo = {
  name: "Tô Văn Tới",
  avatar:
    "https://res.cloudinary.com/ddzdect5z/image/upload/v1775140610/avt_rqrmsz.jpg",
  phone: "0359272229",
  zalo: "https://zalo.me/0359272229",
  facebook: "https://www.facebook.com/tovantoi.03092003/",
  email: "tovantoi2003@gmail.com",
  location: "Cần Thơ, Việt Nam",
  bio: "Xin chào, mình là Tới. Mình thích những cuộc trò chuyện chân thành, những buổi cà phê nhẹ nhàng và những chuyến đi giúp lưu giữ thật nhiều kỷ niệm. Mình tin rằng một mối quan hệ tốt bắt đầu từ sự tử tế và đồng điệu.",
};

const typingTexts = [
  "Độc thân vui tính",
  "Thích cà phê cuối tuần",
  "Yêu thích những chuyến đi",
  "Luôn sẵn sàng làm quen",
];

const mediaGallery = [
  {
    id: 1,
    type: "image",
    url: "https://res.cloudinary.com/ddzdect5z/image/upload/v1775746934/iemg3ukqfeeobfwlbjyi.png",
    title: "Cà phê cuối tuần",
  },
  {
    id: 2,
    type: "image",
    url: "https://res.cloudinary.com/ddzdect5z/image/upload/v1775746938/d069ufy3qxlxoy6crutx.png",
    title: "Thích đi dạo phố",
  },
  {
    id: 3,
    type: "video",
    url: "https://res.cloudinary.com/ddzdect5z/video/upload/v1774057810/vfetf1zqopegouj1yvd7.mp4",
    thumbnail:
      "https://res.cloudinary.com/ddzdect5z/image/upload/v1774183596/vgd8ksobg6uwxmnipter.jpg",
    title: "Quay vu vơ một ngày đẹp trời",
  },
  {
    id: 4,
    type: "image",
    url: "https://res.cloudinary.com/ddzdect5z/image/upload/v1777953881/xuso0inowirvuicco4uh.png",
    title: "Đam mê du lịch",
  },
];

const profileStats = [
  { value: "23", label: "Tuổi", icon: Calendar },
  { value: "3+", label: "Năm trải nghiệm", icon: Briefcase },
  { value: "10+", label: "Địa điểm đã đi", icon: Map },
  { value: "100%", label: "Chân thành", icon: Heart },
];

const personalTraits = [
  {
    icon: Calendar,
    title: "23 Tuổi",
    desc: "Đang ở độ tuổi rực rỡ nhất, mang trong mình năng lượng tích cực và nhiệt huyết tuổi trẻ.",
    tone: "blue",
  },
  {
    icon: Sparkles,
    title: "Độc Thân",
    desc: "Hiện tại vẫn lẻ bóng và đã chuẩn bị sẵn sàng tâm lý để bắt đầu một mối quan hệ nghiêm túc.",
    tone: "green",
  },
  {
    icon: Heart,
    title: "Tìm Bạn Đời",
    desc: "Mong muốn tìm được một người thấu hiểu, đồng điệu về tâm hồn để gắn bó dài lâu.",
    tone: "rose",
  },
  {
    icon: Coffee,
    title: "Thích Trò Chuyện",
    desc: "Rất thích những buổi hẹn hò cà phê cuối tuần, cùng nhau dạo phố và chia sẻ về cuộc sống.",
    tone: "orange",
  },
];

const hobbies = [
  {
    icon: Coffee,
    title: "Cà phê",
    desc: "Tìm những quán cà phê yên tĩnh để thư giãn.",
    color: "amber",
  },
  {
    icon: Map,
    title: "Du lịch",
    desc: "Khám phá những địa điểm mới và lưu giữ kỷ niệm.",
    color: "cyan",
  },
  {
    icon: Music,
    title: "Âm nhạc",
    desc: "Thường nghe nhạc khi làm việc hoặc lúc rảnh.",
    color: "purple",
  },
  {
    icon: Utensils,
    title: "Ẩm thực",
    desc: "Thích thử món ngon và chia sẻ cùng mọi người.",
    color: "rose",
  },
  {
    icon: Gamepad2,
    title: "Giải trí",
    desc: "Một chút game và phim ảnh sau ngày dài.",
    color: "emerald",
  },
  {
    icon: BookOpen,
    title: "Học hỏi",
    desc: "Luôn muốn phát triển bản thân mỗi ngày.",
    color: "blue",
  },
];

const journey = [
  {
    year: "2021",
    title: "Bắt đầu hành trình mới",
    desc: "Bắt đầu học hỏi, trải nghiệm và khám phá nhiều điều thú vị hơn.",
    icon: GraduationCap,
  },
  {
    year: "2023",
    title: "Phát triển bản thân",
    desc: "Tập trung nâng cao kỹ năng, mở rộng các mối quan hệ.",
    icon: Briefcase,
  },
  {
    year: "2025",
    title: "Sống tích cực hơn",
    desc: "Dành nhiều thời gian cho gia đình, bạn bè và những chuyến đi.",
    icon: Heart,
  },
];

function Reveal({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.58, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function FloatingHearts() {
  const hearts = Array.from({ length: 18 }, (_, id) => ({
    id,
    left: `${(id * 37 + 7) % 100}%`,
    delay: `${(id * 0.73) % 8}s`,
    duration: `${12 + (id % 6) * 2}s`,
    size: `${16 + (id % 4) * 5}px`,
    opacity: 0.16 + (id % 5) * 0.04,
  }));

  return (
    <div className="heart-field" aria-hidden="true">
      {hearts.map((heart) => (
        <span
          className="floating-heart"
          key={heart.id}
          style={{
            left: heart.left,
            animationDelay: heart.delay,
            animationDuration: heart.duration,
            fontSize: heart.size,
            opacity: heart.opacity,
          }}
        >
          ♥
        </span>
      ))}
    </div>
  );
}

function SectionHeading({ icon: Icon, children }) {
  return (
    <h2 className="section-heading">
      <Icon size={24} strokeWidth={2.5} />
      {children}
    </h2>
  );
}

function FacebookMark({ size = 19 }) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.7V3.9c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.1V10H8v3h2.4v8h3.1Z" />
    </svg>
  );
}

function ChatPanel({
  isOpen,
  onClose,
  messages,
  inputText,
  setInputText,
  isTyping,
  selectedFile,
  previewUrl,
  fileInputRef,
  onFileChange,
  onRemoveFile,
  onSubmit,
}) {
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="chat-panel"
          initial={{ opacity: 0, scale: 0.92, y: 18 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 18 }}
          transition={{ duration: 0.2 }}
          role="dialog"
          aria-label="Ông Tơ AI của Tới"
        >
          <div className="chat-header">
            <div className="chat-title">
              <Bot size={22} />
              <span>Ông Tơ AI của Tới</span>
            </div>
            <button className="icon-button icon-button--light" onClick={onClose} aria-label="Đóng chat">
              <X size={19} />
            </button>
          </div>

          <div className="chat-messages">
            {messages.map((message, index) => (
              <div className={`message-row ${message.role}`} key={`${message.role}-${index}`}>
                {message.role === "bot" && (
                  <div className="bot-avatar">
                    <Bot size={15} />
                  </div>
                )}
                <div className="message-bubble">{message.text}</div>
              </div>
            ))}
            {isTyping && (
              <div className="message-row bot">
                <div className="bot-avatar">
                  <Bot size={15} />
                </div>
                <div className="message-bubble typing-bubble">
                  <Loader2 size={16} className="spin" />
                  Đang nghĩ câu trả lời…
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {previewUrl && (
            <div className="file-preview">
              <img src={previewUrl} alt="Ảnh đang chọn" />
              <button onClick={onRemoveFile} aria-label="Xóa ảnh đính kèm">
                <X size={14} />
              </button>
              <span>{selectedFile?.name}</span>
            </div>
          )}

          <form className="chat-form" onSubmit={onSubmit}>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              hidden
              onChange={onFileChange}
            />
            <button
              type="button"
              className="attachment-button"
              onClick={() => fileInputRef.current?.click()}
              aria-label="Đính kèm ảnh"
            >
              <Paperclip size={19} />
            </button>
            <input
              value={inputText}
              onChange={(event) => setInputText(event.target.value)}
              placeholder="Hỏi AI về Tới…"
              aria-label="Tin nhắn"
            />
            <button className="send-button" type="submit" disabled={isTyping}>
              {isTyping ? <Loader2 size={18} className="spin" /> : <Send size={18} />}
            </button>
          </form>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Profile() {
  const [viewingMedia, setViewingMedia] = useState(null);
  const [typingIndex, setTypingIndex] = useState(0);
  const [typingText, setTypingText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    {
      role: "bot",
      text: 'Xin chào! Mình là AI "hỗ trợ thả thính" của Tới. Bạn muốn hỏi thăm gì về anh ấy, cứ nhắn mình nha! 🥰',
    },
  ]);
  const fileInputRef = useRef(null);
  const youtubeFrameRef = useRef(null);
  const youtubeCommandIdRef = useRef(0);
  const youtubeVideoId = "jPjQJYKhhk4";

  const sendYouTubeCommand = (command) => {
    const commandId = ++youtubeCommandIdRef.current;
    const postCommand = () => {
      const frame = youtubeFrameRef.current;
      if (!frame?.contentWindow) return;
      frame.contentWindow.postMessage(
        JSON.stringify({ event: "command", func: command, args: [] }),
        "https://www.youtube.com",
      );
    };

    postCommand();
    [250, 700].forEach((delay) => {
      window.setTimeout(() => {
        if (commandId === youtubeCommandIdRef.current) postCommand();
      }, delay);
    });
  };

  const toggleAmbientSound = () => {
    const nextState = !soundEnabled;
    setSoundEnabled(nextState);
    sendYouTubeCommand(nextState ? "playVideo" : "pauseVideo");
  };

  useEffect(() => {
    const currentText = typingTexts[typingIndex];
    const timer = window.setTimeout(() => {
      if (charIndex < currentText.length) {
        setTypingText(currentText.slice(0, charIndex + 1));
        setCharIndex((current) => current + 1);
      } else {
        setTypingText("");
        setCharIndex(0);
        setTypingIndex((current) => (current + 1) % typingTexts.length);
      }
    }, charIndex === currentText.length ? 1800 : 85);
    return () => window.clearTimeout(timer);
  }, [charIndex, typingIndex]);

  useEffect(() => {
    if (!viewingMedia) return undefined;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setViewingMedia(null);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [viewingMedia]);

  useEffect(() => {
    return () => {
      if (previewUrl) URL.revokeObjectURL(previewUrl);
    };
  }, [previewUrl]);

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) return;
    if (previewUrl) URL.revokeObjectURL(previewUrl);
    setSelectedFile(file);
    setPreviewUrl(URL.createObjectURL(file));
  };

  const removeFile = () => {
    if (previewUrl) URL.revokeObjectURL(previewUrl);
    setSelectedFile(null);
    setPreviewUrl(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleSendMessage = async (event) => {
    event.preventDefault();
    if ((!inputText.trim() && !selectedFile) || isTyping) return;

    const message = inputText.trim();
    const displayText = selectedFile
      ? `${message || "[Đã đính kèm ảnh]"}${message ? " [Đã đính kèm ảnh]" : ""}`
      : message;
    setChatMessages((current) => [...current, { role: "user", text: displayText }]);
    setInputText("");
    setIsTyping(true);

    const fileToSend = selectedFile;
    removeFile();

    try {
      const formData = new FormData();
      formData.append("message", message);
      formData.append("user_id", "1");
      if (fileToSend) formData.append("image", fileToSend);

      const response = await fetch("https://chatbot-fe-vantoi.onrender.com/api/chat", {
        method: "POST",
        body: formData,
      });
      if (!response.ok) throw new Error(`Chat API returned ${response.status}`);
      const data = await response.json();
      setChatMessages((current) => [
        ...current,
        { role: "bot", text: data.reply || "Mình chưa nhận được câu trả lời, bạn thử lại nhé!" },
      ]);
    } catch (error) {
      console.error("Chat error:", error);
      setChatMessages((current) => [
        ...current,
        {
          role: "bot",
          text: "Hệ thống đang bận một chút. Bạn có thể kết bạn Zalo trực tiếp với Tới nhé!",
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="page-shell">
      <div className="youtube-audio-player" aria-hidden="true">
        <iframe
          ref={youtubeFrameRef}
          title="Nhạc nền"
          src={`https://www.youtube.com/embed/${youtubeVideoId}?enablejsapi=1&autoplay=0&controls=0&disablekb=1&loop=1&playlist=${youtubeVideoId}&modestbranding=1&playsinline=1&rel=0`}
          allow="autoplay; encrypted-media"
        />
      </div>
      <FloatingHearts />
      <header className="hero">
        <div className="hero-orbs" aria-hidden="true">
          <span className="hero-orb hero-orb--one" />
          <span className="hero-orb hero-orb--two" />
          <span className="hero-orb hero-orb--three" />
        </div>
        <div className="hero-stars" aria-hidden="true">
          {Array.from({ length: 22 }, (_, index) => (
            <span key={index} style={{ "--star-x": `${(index * 41) % 100}%`, "--star-y": `${(index * 67) % 100}%`, "--star-delay": `${index * 0.17}s` }} />
          ))}
        </div>
      </header>

      <main className="main-grid">
        <aside className="profile-column">
          <div className="profile-card">
            <div className="profile-cover" />
            <div className="profile-content">
              <div className="avatar-wrap">
                <img src={personalInfo.avatar} alt={`Ảnh đại diện của ${personalInfo.name}`} />
                <span className="online-dot" title="Đang trực tuyến" />
              </div>
              <h1>{personalInfo.name}</h1>
              <div className="typing-pill">
                <Sparkles size={14} />
                <span>{typingText || "\u00a0"}</span>
                <span className="typing-cursor">|</span>
              </div>
              <div className="divider" />
              <p className="profile-bio">“{personalInfo.bio}”</p>
              <p className="location-pill">
                <MapPin size={14} />
                {personalInfo.location}
              </p>
              <div className="social-links">
                <a href={personalInfo.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
                  <FacebookMark />
                </a>
                <a href={`mailto:${personalInfo.email}`} aria-label="Email">
                  <Mail size={19} />
                </a>
                <a href={`tel:${personalInfo.phone}`} aria-label="Gọi điện">
                  <PhoneCall size={19} />
                </a>
              </div>
              <a className="primary-button full-width" href={personalInfo.zalo} target="_blank" rel="noreferrer">
                <MessageCircle size={18} />
                Làm quen qua Zalo
              </a>
            </div>
          </div>
        </aside>

        <div className="content-column">
          <section className="content-card">
            <SectionHeading icon={UserPlus}>Về Bản Thân Mình</SectionHeading>
            <div className="stats-grid">
              {profileStats.map(({ icon: Icon, value, label }) => (
                <motion.div className="stat-card" key={label} whileHover={{ y: -5 }}>
                  <Icon size={22} />
                  <strong>{value}</strong>
                  <span>{label}</span>
                </motion.div>
              ))}
            </div>
            <div className="traits-grid">
              {personalTraits.map(({ icon: Icon, title, desc, tone }, index) => (
                <Reveal key={title} delay={index * 0.07}>
                  <article className={`trait-card trait-card--${tone}`}>
                    <div className="trait-icon"><Icon size={22} /></div>
                    <h3>{title}</h3>
                    <p>{desc}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </section>

          <Reveal>
            <section className="content-card">
              <SectionHeading icon={Sparkles}>Sở Thích Của Mình</SectionHeading>
              <div className="hobbies-grid">
                {hobbies.map(({ icon: Icon, title, desc, color }) => (
                  <motion.article className="hobby-card" key={title} whileHover={{ scale: 1.025, y: -4 }}>
                    <div className={`hobby-icon hobby-icon--${color}`}><Icon size={22} /></div>
                    <h3>{title}</h3>
                    <p>{desc}</p>
                  </motion.article>
                ))}
              </div>
            </section>
          </Reveal>

          <section className="content-card">
            <SectionHeading icon={Camera}>Khoảnh Khắc Của Mình</SectionHeading>
            <div className="gallery-grid">
              {mediaGallery.map((item) => (
                <button className="media-tile" key={item.id} onClick={() => setViewingMedia(item)} aria-label={`Xem ${item.title}`}>
                  {item.type === "image" ? (
                    <img src={item.url} alt={item.title} loading="lazy" />
                  ) : (
                    <>
                      <img src={item.thumbnail} alt={item.title} loading="lazy" />
                      <span className="play-button"><Play size={18} fill="currentColor" /></span>
                    </>
                  )}
                  <span className="media-caption">{item.title}</span>
                </button>
              ))}
            </div>
          </section>

          <Reveal>
            <section className="content-card">
              <SectionHeading icon={Map}>Hành Trình Của Mình</SectionHeading>
              <div className="timeline">
                {journey.map(({ icon: Icon, year, title, desc }, index) => (
                  <motion.article
                    className="timeline-item"
                    key={year}
                    initial={{ opacity: 0, x: -18 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.12 }}
                  >
                    <div className="timeline-icon"><Icon size={14} /></div>
                    <span>{year}</span>
                    <h3>{title}</h3>
                    <p>{desc}</p>
                  </motion.article>
                ))}
              </div>
            </section>
          </Reveal>

          <section className="closing-card">
            <div className="closing-heart"><Heart size={150} fill="currentColor" /></div>
            <h2>Biết đâu chúng ta đang chờ nhau?</h2>
            <p>Nếu bạn thích những cuộc trò chuyện chân thành, những buổi cà phê cuối tuần và muốn làm quen với một người luôn vui vẻ, hãy gửi cho Tới một lời chào nhé.</p>
            <a className="secondary-button" href={personalInfo.zalo} target="_blank" rel="noreferrer">
              <MessageCircle size={18} /> Gửi lời chào
            </a>
          </section>
        </div>
      </main>

      <AnimatePresence>
        {viewingMedia && (
          <motion.div
            className="media-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setViewingMedia(null)}
          >
            <button className="modal-close" onClick={() => setViewingMedia(null)} aria-label="Đóng">
              <X size={24} />
            </button>
            <motion.div
              className="modal-content"
              initial={{ scale: 0.94 }}
              animate={{ scale: 1 }}
              onClick={(event) => event.stopPropagation()}
            >
              {viewingMedia.type === "image" ? (
                <img src={viewingMedia.url} alt={viewingMedia.title} />
              ) : (
                <video controls autoPlay>
                  <source src={viewingMedia.url} type="video/mp4" />
                  Trình duyệt của bạn không hỗ trợ thẻ video.
                </video>
              )}
              <p>{viewingMedia.title}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="floating-actions">
        <ChatPanel
          isOpen={isChatOpen}
          onClose={() => setIsChatOpen(false)}
          messages={chatMessages}
          inputText={inputText}
          setInputText={setInputText}
          isTyping={isTyping}
          selectedFile={selectedFile}
          previewUrl={previewUrl}
          fileInputRef={fileInputRef}
          onFileChange={handleFileChange}
          onRemoveFile={removeFile}
          onSubmit={handleSendMessage}
        />
        <div className="action-row">
          <button
            className={`audio-toggle ${soundEnabled ? "active" : ""}`}
            onClick={toggleAmbientSound}
            aria-label={soundEnabled ? "Tắt nhạc nền" : "Bật nhạc nền"}
            aria-pressed={soundEnabled}
            title={soundEnabled ? "Tắt nhạc nền" : "Bật nhạc nền nhẹ"}
          >
            {soundEnabled ? <Volume2 size={19} /> : <VolumeX size={19} />}
            <span>{soundEnabled ? "Đang phát" : "Nhạc nhẹ"}</span>
          </button>
          <button
            className={`chat-toggle ${isChatOpen ? "open" : ""}`}
            onClick={() => setIsChatOpen((current) => !current)}
            aria-label={isChatOpen ? "Đóng trợ lý AI" : "Mở trợ lý AI"}
          >
            {isChatOpen ? <X size={25} /> : <Heart size={25} fill="currentColor" />}
            {!isChatOpen && <span className="notification-dot"><Check size={9} /></span>}
          </button>
        </div>
      </div>

      <nav className="mobile-contact-bar">
        <a href={personalInfo.facebook} target="_blank" rel="noreferrer" aria-label="Facebook"><FacebookMark size={18} /></a>
        <a href={personalInfo.zalo} target="_blank" rel="noreferrer"><MessageCircle size={18} /> Nhắn tin làm quen</a>
      </nav>
    </div>
  );
}