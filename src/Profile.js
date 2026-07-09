// src/Profile.js
import React, { useState, useEffect, useRef } from "react";
import {
  PhoneCall,
  MessageCircle,
  Facebook,
  Mail,
  MapPin,
  Heart,
  Calendar,
  UserPlus,
  Coffee,
  ArrowUp,
  X,
  Send,
  Bot,
  Loader2,
  Paperclip,
  Smile,
  Camera,
  Play,
} from "lucide-react";

export default function Profile() {
  // --- THÔNG TIN CÁ NHÂN ---
  const personalInfo = {
    name: "Tô Văn Tới",
    title: "Độc Thân Vui Tính",
    avatar:
      "https://res.cloudinary.com/ddzdect5z/image/upload/v1775140610/avt_rqrmsz.jpg",
    phone: "0359272229",
    zalo: "https://zalo.me/0359272229",
    facebook: "https://www.facebook.com/tovantoi.03092003/",
    email: "tovantoi.finance@gmail.com",
    location: "Cần Thơ, Việt Nam",
    bio: "Xin chào! Mình là Tới, năm nay 23 tuổi. Mình là một người hòa đồng, chân thành và đang nghiêm túc tìm kiếm một nửa yêu thương để cùng chia sẻ những buồn vui trong cuộc sống. Nếu bạn cũng đang tìm kiếm sự đồng điệu, hãy kết nối với mình nhé!",
  };

  // --- THƯ VIỆN HÌNH ẢNH / VIDEO ---
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
      // Link ảnh ví dụ dạng dọc (Portrait)
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
      // Link ảnh ví dụ dạng siêu dọc
      url: "https://res.cloudinary.com/ddzdect5z/image/upload/v1777953881/xuso0inowirvuicco4uh.png",
      title: "Đam mê du lịch",
    },
  ];

  const [showTopBtn, setShowTopBtn] = useState(false);
  const [viewingMedia, setViewingMedia] = useState(null);

  // --- STATE CHATBOT ---
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    {
      role: "bot",
      text: 'Xin chào! Mình là AI "hỗ trợ thả thính" của Tới. Bạn muốn hỏi thăm gì về anh ấy, cứ nhắn mình nha! 🥰',
    },
  ]);

  const chatEndRef = useRef(null);
  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  // --- EFFECTS ---
  useEffect(() => {
    const handleScroll = () => setShowTopBtn(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages, isTyping]);

  // --- ACTIONS ---
  const goToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const removeImage = () => {
    setSelectedFile(null);
    setPreviewUrl(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputText.trim() && !selectedFile) return;

    const userMsg = inputText.trim();
    const displayMsg = selectedFile
      ? userMsg
        ? `${userMsg} [Đã đính kèm ảnh]`
        : "[Đã đính kèm ảnh]"
      : userMsg;

    setChatMessages((prev) => [...prev, { role: "user", text: displayMsg }]);
    setInputText("");
    setIsTyping(true);

    try {
      const formData = new FormData();
      formData.append("message", userMsg);
      formData.append("user_id", "1");

      if (selectedFile) {
        formData.append("image", selectedFile);
      }

      removeImage();

      const response = await fetch(
        "https://chatbot-fe-vantoi.onrender.com/api/chat",
        {
          method: "POST",
          body: formData,
        },
      );

      const data = await response.json();
      setChatMessages((prev) => [...prev, { role: "bot", text: data.reply }]);
    } catch (error) {
      console.error("Chat Error:", error);
      setChatMessages((prev) => [
        ...prev,
        {
          role: "bot",
          text: "Hệ thống đang bận một chút. Bạn có thể kết bạn Zalo trực tiếp với Tới nhé!",
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const personalTraits = [
    {
      icon: Calendar,
      title: "23 Tuổi",
      desc: "Đang ở độ tuổi rực rỡ nhất, mang trong mình năng lượng tích cực và nhiệt huyết.",
      color: "blue",
    },
    {
      icon: Smile,
      title: "Độc Thân",
      desc: "Hiện tại vẫn lẻ bóng và đã chuẩn bị sẵn sàng tâm lý để bắt đầu một mối quan hệ nghiêm túc.",
      color: "emerald",
    },
    {
      icon: Heart,
      title: "Tìm Bạn Đời",
      desc: "Mong muốn tìm được một người thấu hiểu, đồng điệu về tâm hồn để gắn bó dài lâu.",
      color: "rose",
    },
    {
      icon: Coffee,
      title: "Thích Trò Chuyện",
      desc: "Rất thích những buổi hẹn hò cà phê cuối tuần, cùng nhau dạo phố và chia sẻ về cuộc sống.",
      color: "orange",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 pb-28 md:pb-12 selection:bg-indigo-200 relative scroll-smooth">
      <div className="hidden bg-blue-100 text-blue-600 border-blue-200 bg-emerald-100 text-emerald-600 border-emerald-200 bg-rose-100 text-rose-600 border-rose-200 bg-orange-100 text-orange-600 border-orange-200"></div>

      {/* NỀN ĐỈNH TRANG (TÔNG MÀU XANH TÍM NAM TÍNH) */}
      <div className="absolute top-0 left-0 w-full h-[35vh] md:h-[40vh] bg-gradient-to-br from-indigo-800 via-blue-700 to-cyan-700 z-0 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-20 w-32 h-32 bg-white/20 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 pt-20 sm:pt-32 relative z-10 flex flex-col md:flex-row gap-6 lg:gap-8 justify-center">
        {/* CỘT TRÁI: PROFILE CARD */}
        <div className="w-full md:w-[40%] lg:w-[35%] shrink-0">
          <div className="bg-white rounded-3xl shadow-xl border border-indigo-50 overflow-hidden md:sticky md:top-8">
            <div className="h-32 bg-gradient-to-r from-blue-500 to-indigo-600 relative"></div>

            <div className="px-6 pb-8 text-center relative">
              <div className="relative inline-block -mt-16 mb-4">
                <img
                  src={personalInfo.avatar}
                  alt="Avatar"
                  className="w-32 h-32 rounded-full border-[5px] border-white shadow-lg object-cover bg-white"
                />
                <div
                  className="absolute bottom-2 right-2 bg-emerald-500 w-4 h-4 rounded-full border-2 border-white"
                  title="Đang trực tuyến"
                ></div>
              </div>
              <h1 className="text-2xl font-black text-slate-900 leading-tight">
                {personalInfo.name}
              </h1>
              <p className="text-indigo-600 font-bold mt-2 flex items-center justify-center gap-1.5 text-sm bg-indigo-50 border border-indigo-100 w-fit mx-auto px-4 py-1.5 rounded-full shadow-sm">
                <Heart size={14} className="fill-rose-500 text-rose-500" />{" "}
                {personalInfo.title}
              </p>

              <div className="w-10 h-1 bg-indigo-100 mx-auto my-5 rounded-full"></div>

              <p className="text-slate-600 text-sm leading-relaxed mb-6 text-justify">
                "{personalInfo.bio}"
              </p>

              <p className="text-slate-500 text-xs flex items-center justify-center gap-1.5 mb-6 bg-slate-50 py-2 rounded-lg">
                <MapPin size={14} className="text-indigo-500" />{" "}
                <span className="font-medium">{personalInfo.location}</span>
              </p>

              <div className="flex justify-center gap-4 mb-6">
                <a
                  href={personalInfo.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 bg-slate-50 text-blue-600 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all shadow-sm border border-slate-100 hover:scale-110"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 bg-slate-50 text-rose-500 rounded-full flex items-center justify-center hover:bg-rose-500 hover:text-white transition-all shadow-sm border border-slate-100 hover:scale-110"
                >
                  <Mail size={20} />
                </a>
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="w-12 h-12 bg-slate-50 text-emerald-600 rounded-full flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-all shadow-sm border border-slate-100 hover:scale-110"
                >
                  <PhoneCall size={20} />
                </a>
              </div>

              <div className="space-y-3">
                <a
                  href={personalInfo.zalo}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full bg-indigo-600 text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-600/30"
                >
                  <MessageCircle size={18} /> Làm quen qua Zalo
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* CỘT PHẢI: CHI TIẾT CÁ NHÂN */}
        <div className="w-full md:w-[60%] lg:w-[65%] space-y-6">
          {/* KHỐI VỀ BẢN THÂN MÌNH */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-xl shadow-indigo-100/40 border border-slate-100">
            <h2 className="text-xl sm:text-2xl font-black text-slate-800 mb-6 flex items-center gap-2">
              <UserPlus className="text-indigo-600" size={26} /> Về Bản Thân
              Mình
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {personalTraits.map((item, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-2xl bg-white border-2 border-${item.color}-50 hover:border-${item.color}-200 hover:shadow-lg hover:shadow-${item.color}-100/50 transition-all duration-300 group`}
                >
                  <div
                    className={`w-12 h-12 rounded-2xl bg-${item.color}-100 text-${item.color}-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}
                  >
                    <item.icon size={24} />
                  </div>
                  <h3 className="font-bold text-slate-800 mb-2 text-lg">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* KHỐI KHOẢNH KHẮC (MASONRY LAYOUT - TỰ ĐỘNG KHỚP ẢNH DỌC) */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-xl shadow-indigo-100/40 border border-slate-100">
            <h2 className="text-xl sm:text-2xl font-black text-slate-800 mb-6 flex items-center gap-2">
              <Camera className="text-indigo-600" size={26} /> Khoảnh Khắc Của
              Mình
            </h2>

            {/* SỬ DỤNG COLUMNS ĐỂ TẠO LƯỚI XẾP GẠCH (MASONRY) */}
            <div className="columns-2 gap-3 sm:gap-4">
              {mediaGallery.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setViewingMedia(item)}
                  className="relative group rounded-2xl overflow-hidden cursor-pointer border border-slate-100 shadow-sm bg-slate-50 break-inside-avoid mb-3 sm:mb-4"
                >
                  {/* Ảnh tự động hiển thị đúng chiều cao, không bị cắt xén */}
                  {item.type === "image" && (
                    <img
                      src={item.url}
                      alt={item.title}
                      className="w-full h-auto block group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  )}

                  {item.type === "video" && (
                    <>
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="w-full h-auto block group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/40 transition-colors">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg border border-white/40">
                          <Play className="fill-white text-white w-4 h-4 sm:w-5 sm:h-5 ml-1" />
                        </div>
                      </div>
                    </>
                  )}

                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-3 sm:p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-xs sm:text-sm font-medium truncate">
                      {item.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* LỜI CHÀO KẾT */}
          <div className="bg-gradient-to-br from-indigo-600 to-blue-700 text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-[-20px] left-[-20px] text-white/10 transform -rotate-12">
              <Heart size={150} className="fill-white/10" />
            </div>

            <h2 className="text-xl font-bold mb-3 relative z-10">
              Sẵn sàng để bắt đầu?
            </h2>
            <p className="text-indigo-100 text-sm leading-relaxed mb-6 relative z-10 max-w-md">
              Nếu bạn cảm thấy có sự đồng điệu, đừng ngần ngại nhắn tin cho
              mình. Hoặc bạn có thể trò chuyện thử với "Ông tơ AI" ở góc màn
              hình để biết thêm về mình nhé!
            </p>
            <a
              href={personalInfo.zalo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-white text-indigo-600 font-bold px-6 py-3 rounded-xl hover:bg-indigo-50 transition-colors shadow-lg relative z-10"
            >
              <MessageCircle size={18} /> Gửi lời chào
            </a>
          </div>
        </div>
      </div>

      {/* --- MODAL XEM ẢNH / VIDEO PHÓNG TO --- */}
      {viewingMedia && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex flex-col items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setViewingMedia(null)}
        >
          <button
            onClick={() => setViewingMedia(null)}
            className="absolute top-4 right-4 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition z-[110] backdrop-blur-md"
          >
            <X size={24} />
          </button>

          <div
            className="max-w-4xl w-full flex flex-col items-center animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {viewingMedia.type === "image" ? (
              <img
                src={viewingMedia.url}
                alt={viewingMedia.title}
                className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
              />
            ) : (
              <video
                controls
                autoPlay
                className="max-w-full max-h-[85vh] rounded-xl shadow-2xl bg-black"
              >
                <source src={viewingMedia.url} type="video/mp4" />
                Trình duyệt của bạn không hỗ trợ thẻ video.
              </video>
            )}
            <p className="text-white font-medium text-lg mt-4 text-center">
              {viewingMedia.title}
            </p>
          </div>
        </div>
      )}

      {/* --- CỤM CHỨA NÚT BACK TO TOP & CHATBOT --- */}
      <div className="fixed bottom-24 md:bottom-8 right-4 md:right-8 z-50 flex flex-col items-end gap-3">
        {/* KHUNG CHATBOT NỔI */}
        <div
          className={`bg-white w-[300px] sm:w-[350px] rounded-3xl shadow-2xl overflow-hidden border border-indigo-100 transition-all duration-300 origin-bottom-right ${isChatOpen ? "scale-100 opacity-100 mb-2" : "scale-0 opacity-0 h-0 m-0 pointer-events-none"}`}
        >
          <div className="bg-gradient-to-r from-indigo-600 to-blue-600 p-4 flex justify-between items-center text-white">
            <div className="flex items-center gap-2">
              <Bot size={22} />
              <span className="font-bold text-sm">Ông Tơ AI của Tới</span>
            </div>
            <button
              onClick={() => setIsChatOpen(false)}
              className="text-white/80 hover:text-white"
            >
              <X size={20} />
            </button>
          </div>

          <div className="h-[350px] overflow-y-auto p-4 bg-slate-50 flex flex-col gap-3">
            {chatMessages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex gap-2 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                {msg.role === "bot" && (
                  <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 shrink-0">
                    <Bot size={16} />
                  </div>
                )}
                <div
                  className={`p-3 rounded-2xl text-sm leading-relaxed max-w-[85%] ${msg.role === "user" ? "bg-indigo-600 text-white rounded-br-sm" : "bg-white border border-slate-200 text-slate-700 rounded-bl-sm shadow-sm"}`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex gap-2 justify-start">
                <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 shrink-0">
                  <Bot size={16} />
                </div>
                <div className="p-3 bg-white border border-slate-200 rounded-2xl rounded-bl-sm shadow-sm">
                  <Loader2 size={16} className="animate-spin text-indigo-500" />
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* KHU VỰC PREVIEW ẢNH */}
          {previewUrl && (
            <div className="px-3 pt-2 bg-white flex items-center relative border-t border-slate-100">
              <div className="relative inline-block border border-indigo-200 rounded-lg p-1">
                <img
                  src={previewUrl}
                  alt="Preview"
                  className="h-14 w-auto rounded object-cover"
                />
                <button
                  type="button"
                  onClick={removeImage}
                  className="absolute -top-2 -right-2 bg-rose-500 text-white rounded-full p-0.5 shadow-md hover:bg-rose-600"
                >
                  <X size={14} />
                </button>
              </div>
            </div>
          )}

          {/* KHUNG NHẬP CHỮ & NÚT GỬI */}
          <form
            onSubmit={handleSendMessage}
            className="p-3 bg-white border-t border-slate-100 flex gap-2 items-center"
          >
            <input
              type="file"
              accept="image/*"
              className="hidden"
              ref={fileInputRef}
              onChange={handleFileChange}
            />
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="p-2 text-slate-400 hover:text-indigo-500 transition-colors shrink-0"
              title="Đính kèm ảnh"
            >
              <Paperclip size={20} />
            </button>

            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Hỏi AI về Tới..."
              className="flex-1 bg-slate-100 border-none rounded-xl px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500/50"
            />
            <button
              type="submit"
              disabled={isTyping}
              className="bg-indigo-600 hover:bg-indigo-700 text-white w-10 h-10 rounded-xl flex items-center justify-center transition-colors disabled:opacity-50 shrink-0 shadow-md"
            >
              <Send
                size={18}
                className={inputText.trim() || selectedFile ? "ml-1" : ""}
              />
            </button>
          </form>
        </div>

        {/* NÚT BACK TO TOP VÀ MỞ CHAT */}
        <div className="flex items-center gap-3">
          <button
            onClick={goToTop}
            className={`bg-slate-800 hover:bg-slate-700 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 ${showTopBtn && !isChatOpen ? "opacity-100 scale-100" : "opacity-0 scale-50 pointer-events-none"}`}
            title="Lên đầu trang"
          >
            <ArrowUp size={24} />
          </button>

          <button
            onClick={() => setIsChatOpen(!isChatOpen)}
            className={`w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 text-white relative ${isChatOpen ? "bg-slate-800 hover:bg-slate-700 rotate-90" : "bg-indigo-600 hover:bg-indigo-700 animate-bounce"}`}
          >
            {isChatOpen ? (
              <X size={28} />
            ) : (
              <Heart size={26} className="fill-white/20" />
            )}
            {!isChatOpen && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full"></span>
            )}
          </button>
        </div>
      </div>

      {/* THANH LIÊN HỆ ĐÁY MÀN HÌNH (MOBILE) */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-white/90 backdrop-blur-md border-t border-slate-100 p-3 z-[40] shadow-[0_-10px_20px_rgba(0,0,0,0.05)]">
        <div className="flex gap-3">
          <a
            href={personalInfo.facebook}
            target="_blank"
            rel="noreferrer"
            className="flex-1 bg-slate-100 text-blue-600 font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 hover:bg-slate-200 transition-colors shadow-sm"
          >
            <Facebook size={18} />
          </a>
          <a
            href={personalInfo.zalo}
            target="_blank"
            rel="noreferrer"
            className="flex-[3] bg-indigo-600 text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-600/40"
          >
            <MessageCircle size={18} /> Nhắn tin làm quen
          </a>
        </div>
      </div>
    </div>
  );
}
