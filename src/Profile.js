// src/Profile.js
import React, { useState, useEffect, useRef } from "react";
import {
  PhoneCall,
  MessageCircle,
  Facebook,
  Mail,
  CreditCard,
  Banknote,
  ShieldCheck,
  Clock,
  CheckCircle2,
  Briefcase,
  Star,
  Bike,
  Smartphone,
  FileText,
  Eye,
  X,
  MapPin,
  Megaphone,
  Users,
  DollarSign,
  Info,
  ThumbsUp,
  HelpCircle,
  ChevronDown,
  ArrowUp,
  BadgeCheck,
  ChevronUp,
  Send,
  Bot,
  Loader2,
} from "lucide-react";

export default function Profile() {
  const personalInfo = {
    name: "Tô Văn Tới",
    title: "Chuyên Viên Tư Vấn Tài Chính",
    company: "FE CREDIT",
    avatar:
      "https://res.cloudinary.com/ddzdect5z/image/upload/v1775140610/avt_rqrmsz.jpg",
    phone: "0359272229",
    zalo: "https://zalo.me/0359272229",
    facebook: "https://www.facebook.com/tovantoi.03092003/",
    email: "tovantoi.finance@gmail.com",
    location: "Toàn quốc",
    bio: "Với hơn 3 năm kinh nghiệm tại FE Credit, tôi cam kết mang đến cho khách hàng các giải pháp vay vốn tối ưu, minh bạch về lãi suất và giải ngân nhanh chóng nhất.",
  };

  const [viewingImage, setViewingImage] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);
  const [showTopBtn, setShowTopBtn] = useState(false);

  const sliderRef = useRef(null);
  const chatEndRef = useRef(null);

  // --- CÁC STATE CỦA CHATBOT ---
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    {
      role: "bot",
      text: "Xin chào! Mình là trợ lý AI của anh Tô Văn Tới. Bạn cần hỗ trợ vay vốn hay mở thẻ FE Credit ạ?",
    },
  ]);

  // Xử lý hiện/ẩn nút Lên đầu trang
  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Xử lý Auto-play cho Slide Khách hàng
  useEffect(() => {
    const slideInterval = setInterval(() => {
      if (sliderRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          sliderRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
        }
      }
    }, 3000);
    return () => clearInterval(slideInterval);
  }, []);

  // Tự động cuộn xuống tin nhắn mới nhất trong Chatbot
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages, isTyping]);

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // --- HÀM XỬ LÝ GỬI TIN NHẮN CHATBOT ---
  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const userMsg = inputText.trim();
    // 1. Hiển thị tin nhắn của người dùng lên UI
    setChatMessages((prev) => [...prev, { role: "user", text: userMsg }]);
    setInputText("");
    setIsTyping(true);

    try {
      // 2. Gửi request xuống API Flask Backend
      const formData = new FormData();
      formData.append("message", userMsg);
      formData.append("user_id", "1"); // Truyền ID ảo cho người dùng vãng lai

      const response = await fetch("https://chatbot-fe-vantoi.onrender.com", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      // 3. Nhận phản hồi và hiển thị tin nhắn của Bot
      setChatMessages((prev) => [...prev, { role: "bot", text: data.reply }]);
    } catch (error) {
      console.error("Chat Error:", error);
      setChatMessages((prev) => [
        ...prev,
        {
          role: "bot",
          text: "Hệ thống đang bận hoặc mất kết nối. Vui lòng liên hệ trực tiếp Zalo 0359272229 nhé!",
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const documentImages = [
    {
      id: 1,
      name: "Bảng lãi Tiền Mặt (Trang 1)",
      url: "https://res.cloudinary.com/ddzdect5z/image/upload/v1775140290/z7685152415829_3ba30365bbaf2cd0a3bb2bd0f78cfba0_keuswu.jpg",
    },
    {
      id: 2,
      name: "Bảng lãi Tiền Mặt (Trang 2)",
      url: "https://res.cloudinary.com/ddzdect5z/image/upload/v1775140290/z7685152645282_b9bc22cdecd51ce79505a1f54b303f58_cjze2p.jpg",
    },
    {
      id: 3,
      name: "Chính sách Thẻ Tín Dụng & Ưu đãi",
      url: "https://res.cloudinary.com/ddzdect5z/image/upload/v1775140290/z7685153055148_b75099ce1ec7391a4fe8de4dca238ad5_jrv4m5.jpg",
    },
  ];

  const successStories = [
    {
      id: 1,
      customer: "Nguyễn Thị H***",
      amount: "50.000.000đ",
      date: "Thứ Hai, 16/03/2026",
      time: "13:06",
      desc: "Giải ngân gói Vay Tiền Mặt.",
    },
    {
      id: 2,
      customer: "Trần Văn T***",
      amount: "30.000.000đ",
      date: "14/04/2026",
      time: "13:15",
      desc: "Mở thẻ JCB PLUS thành công.",
    },
    {
      id: 3,
      customer: "Lê Văn D***",
      amount: "45.000.000đ",
      date: "19/04/2026",
      time: "09:30",
      desc: "Duyệt hồ sơ góp xe máy.",
    },
    {
      id: 4,
      customer: "Phạm Tấn T***",
      amount: "70.000.000đ",
      date: "20/04/2026",
      time: "15:45",
      desc: "Giải ngân nhanh vốn kinh doanh.",
    },
  ];

  const faqs = [
    {
      q: "Tôi đang có nợ xấu thì có vay được không?",
      a: "Tùy thuộc vào nhóm nợ xấu của bạn. Nếu là nợ chú ý (nhóm 1, 2) đã tất toán, hệ thống vẫn có thể xem xét hỗ trợ. Nợ nhóm 3 trở lên sẽ chưa thể duyệt lúc này.",
    },
    {
      q: "Thẩm định có gọi điện cho người thân không?",
      a: "Với các gói vay hạn mức nhỏ hoặc điểm tín dụng tốt, hệ thống có thể duyệt tự động mà không cần gọi người thân. Thông tin khoản vay được bảo mật hoàn toàn.",
    },
    {
      q: "Sau khi ký hợp đồng thì bao lâu nhận được tiền?",
      a: "Ngay sau khi hồ sơ được duyệt và ký hợp đồng điện tử thành công, tiền sẽ được chuyển thẳng vào tài khoản ngân hàng của bạn trong vòng 2 đến 24 giờ.",
    },
  ];

  const servicesData = [
    {
      id: "vay-tien-mat",
      icon: Banknote,
      color: "emerald",
      title: "Vay Tiền Mặt",
      shortDesc: [
        "Hỗ trợ hạn mức từ 3 - 100 triệu",
        "Hỗ trợ lên hồ sơ Online từ xa",
        "Chỉ cần CCCD gắn chip",
        "Lãi suất siêu tốt - siêu rẻ",
        "Miễn thẩm định khách tốt",
        "Gặp mặt trực tiếp tỷ lệ duyệt 99%",
      ],
      fullDetails: {
        subtitle: "Giải pháp tài chính siêu tốc cho mọi nhu cầu",
        points: [
          "Hạn mức hỗ trợ cực cao: Lên đến 100.000.000 VNĐ.",
          "Thủ tục siêu đơn giản: 100% Online, chỉ cần CCCD gắn chip (Không giữ giấy tờ gốc).",
          "Lãi suất minh bạch: Ưu đãi theo dư nợ giảm dần (Xem chi tiết tại Bảng Lãi bên dưới).",
          "Giải ngân siêu tốc: Tiền về thẳng tài khoản ngân hàng trong vòng 24h.",
          "Bảo mật thông tin: Khoản vay hoàn toàn bảo mật với gia đình và nơi làm việc.",
        ],
      },
    },
    {
      id: "the-tin-dung",
      icon: CreditCard,
      color: "blue",
      title: "Thẻ JCB PLUS",
      subtitle: "Đặc quyền 5 KHÔNG:",
      shortDesc: [
        "KHÔNG thường niên",
        "KHÔNG phí rút ATM",
        "KHÔNG chờ thẻ cứng",
        "KHÔNG giấy tờ",
        "KHÔNG giới hạn ưu đãi",
      ],
      fullDetails: {
        subtitle: "Chi tiêu trước - Trả sau miễn phí",
        points: [
          "<strong class='text-rose-600'>KHÔNG</strong> phí thường niên trọn đời.",
          "<strong class='text-rose-600'>KHÔNG</strong> phí rút tiền mặt tại ATM (Rút 100% hạn mức).",
          "<strong class='text-rose-600'>KHÔNG</strong> cần chờ thẻ vật lý (Có ngay thẻ ảo dùng lập tức sau khi duyệt).",
          "<strong class='text-rose-600'>KHÔNG</strong> giấy tờ phức tạp (Chỉ cần CCCD gắn chip).",
          "<strong class='text-rose-600'>KHÔNG</strong> giới hạn ưu đãi (Hoàn tiền 1%, giảm đến 50% tại các đối tác ăn uống, mua sắm).",
          "Hỗ trợ trả góp 0% lãi suất cho mọi chi tiêu.",
        ],
      },
    },
    {
      id: "gop-xe-may",
      icon: Bike,
      color: "orange",
      title: "Góp Xe Máy",
      shortDesc: [
        "Hỗ trợ các dòng xe máy và đạp điện",
        "Trả trước từ 20%",
        "Nhận ngay xe và Cà vẹt gốc",
        "Duyệt nhanh 15p",
      ],
      fullDetails: {
        subtitle: "Rước xế yêu về nhà - Không lo tài chính",
        points: [
          "Trả trước cực thấp: Chỉ từ 20% giá trị xe là có thể mang xe về.",
          "Đặc quyền: Nhận ngay Cà vẹt gốc (Giấy tờ xe bản chính) ngay khi mua.",
          "Lãi suất siêu ưu đãi: Hỗ trợ gói vay lãi suất cực thấp.",
          "Duyệt hồ sơ thần tốc: Nhận kết quả và lấy xe ngay chỉ trong vòng 15 phút.",
          "Thủ tục dễ dàng: Không cần chứng minh thu nhập phức tạp.",
        ],
      },
    },
    {
      id: "gop-dien-thoai",
      icon: Smartphone,
      color: "purple",
      title: "Góp Điện Thoại",
      shortDesc: [
        "Lãi suất siêu rẻ",
        "iPhone, Samsung..",
        "Duyệt siêu tốc",
        "Khách tốt và khoản vay thấp sẽ được duyệt thẳng",
      ],
      fullDetails: {
        subtitle: "Sở hữu đồ công nghệ xịn với chi phí nhỏ",
        points: [
          "Sản phẩm áp dụng: iPhone, Samsung, Laptop, Tủ lạnh, Smart TV... tại các hệ thống siêu thị điện máy.",
          "Lãi suất chạm đáy: Cực thấp chỉ từ 0.99%.",
          "Thanh toán linh hoạt: Trả trước siêu thấp, chia nhỏ thanh toán nhiều tháng.",
          "Tốc độ xử lý: Lên hồ sơ và duyệt ngay lập tức chỉ trong 15 phút.",
          "Nhiều quà tặng kèm theo từ đối tác và FE Credit.",
        ],
      },
    },
  ];

  const buttonThemes = {
    emerald: "bg-emerald-500 hover:bg-emerald-600 shadow-emerald-500/30",
    blue: "bg-blue-500 hover:bg-blue-600 shadow-blue-500/30",
    orange: "bg-orange-500 hover:bg-orange-600 shadow-orange-500/30",
    purple: "bg-purple-500 hover:bg-purple-600 shadow-purple-500/30",
  };

  return (
    <div className="min-h-screen bg-slate-100 font-sans text-slate-800 pb-28 md:pb-12 selection:bg-emerald-200 relative scroll-smooth">
      {/* Khối div ẩn ép Tailwind */}
      <div className="hidden bg-emerald-50 text-emerald-600 text-emerald-500 border-emerald-100 text-emerald-500/10 bg-blue-50 text-blue-600 text-blue-500 border-blue-100 text-blue-500/10 bg-orange-50 text-orange-600 text-orange-500 border-orange-100 text-orange-500/10 bg-purple-50 text-purple-600 text-purple-500 border-purple-100 text-purple-500/10"></div>

      {/* NỀN ĐỈNH TRANG */}
      <div className="absolute top-0 left-0 w-full h-[40vh] md:h-[45vh] bg-gradient-to-br from-emerald-600 via-teal-700 to-sky-800 z-0 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="absolute inset-0 flex items-start justify-center pt-10 md:pt-20 opacity-[0.03] select-none pointer-events-none">
          <h1 className="text-[120px] sm:text-[180px] md:text-[220px] lg:text-[250px] font-black tracking-tighter -rotate-12 whitespace-nowrap text-white">
            FE-Credits
          </h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 pt-20 sm:pt-32 relative z-10 flex flex-col md:flex-row gap-6 lg:gap-8">
        {/* CỘT TRÁI: PROFILE CARD */}
        <div className="w-full md:w-[35%] lg:w-[30%] shrink-0">
          <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden md:sticky md:top-8">
            <div className="h-28 bg-gradient-to-r from-emerald-400 to-teal-500 relative">
              <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full border border-white/40 flex items-center gap-1.5 shadow-sm">
                <ShieldCheck size={14} className="text-white" />
                <span className="text-white text-[10px] font-bold tracking-wider">
                  XÁC THỰC
                </span>
              </div>
            </div>

            <div className="px-6 pb-8 text-center relative">
              <div className="relative inline-block -mt-16 mb-3">
                <img
                  src={personalInfo.avatar}
                  alt="Avatar"
                  className="w-32 h-32 rounded-full border-[5px] border-white shadow-lg object-cover bg-white"
                />
                <div
                  className="absolute bottom-1 right-1 bg-emerald-500 w-5 h-5 rounded-full border-2 border-white"
                  title="Đang trực tuyến"
                ></div>
              </div>
              <h1 className="text-2xl font-bold text-slate-900 leading-tight">
                {personalInfo.name}
              </h1>
              <p className="text-emerald-600 font-semibold mt-1.5 flex items-center justify-center gap-1.5 text-sm bg-emerald-50 w-fit mx-auto px-3 py-1 rounded-full">
                <Briefcase size={14} /> {personalInfo.company}
              </p>
              <p className="text-slate-500 text-sm font-medium mt-2">
                {personalInfo.title}
              </p>
              <div className="w-12 h-1 bg-slate-200 mx-auto my-5 rounded-full"></div>
              <p className="text-slate-600 text-sm leading-relaxed mb-4 text-justify">
                "{personalInfo.bio}"
              </p>
              <p className="text-slate-500 text-xs flex items-center justify-center gap-1 mb-6">
                <MapPin size={14} /> Hỗ trợ khách hàng:{" "}
                <span className="font-semibold text-slate-700">
                  {personalInfo.location}
                </span>
              </p>

              <div className="flex justify-center gap-3 mb-6">
                <a
                  href={personalInfo.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 bg-slate-50 text-indigo-600 rounded-full flex items-center justify-center hover:bg-indigo-500 hover:text-white transition-all shadow-sm border border-slate-100"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 bg-slate-50 text-rose-500 rounded-full flex items-center justify-center hover:bg-rose-500 hover:text-white transition-all shadow-sm border border-slate-100"
                >
                  <Mail size={18} />
                </a>
              </div>

              <div className="space-y-3 hidden md:block">
                <a
                  href={personalInfo.zalo}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full bg-emerald-500 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-emerald-600 transition-colors shadow-lg shadow-emerald-500/30"
                >
                  <MessageCircle size={18} /> Nhắn tin Zalo
                </a>
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="w-full bg-slate-50 text-slate-700 border border-slate-200 font-bold py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-slate-100 transition-colors"
                >
                  <PhoneCall size={18} /> {personalInfo.phone}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* CỘT PHẢI */}
        <div className="w-full md:w-[65%] lg:w-[70%] space-y-7 md:space-y-8">
          <div className="grid grid-cols-4 gap-3 md:hidden">
            {[
              {
                icon: PhoneCall,
                label: "Gọi điện",
                color: "emerald",
                href: `tel:${personalInfo.phone}`,
              },
              {
                icon: MessageCircle,
                label: "Zalo",
                color: "blue",
                href: personalInfo.zalo,
              },
              {
                icon: Facebook,
                label: "Facebook",
                color: "indigo",
                href: personalInfo.facebook,
              },
              {
                icon: Mail,
                label: "Email",
                color: "rose",
                href: `https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}`,
              },
            ].map((item, index) => (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="flex flex-col items-center gap-2 group bg-white py-3 rounded-2xl shadow-sm border border-slate-100"
              >
                <div
                  className={`w-10 h-10 bg-${item.color}-50 text-${item.color}-600 rounded-full flex items-center justify-center group-hover:bg-${item.color}-500 group-hover:text-white transition-all`}
                >
                  <item.icon size={18} />
                </div>
                <span className="text-[10px] font-bold text-slate-500">
                  {item.label}
                </span>
              </a>
            ))}
          </div>

          {/* DỊCH VỤ NỔI BẬT */}
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-800 mb-4 sm:mb-5 flex items-center gap-2 md:text-white drop-shadow-md">
              <Star className="text-amber-400 fill-amber-400" size={24} /> Dịch
              Vụ Nổi Bật
            </h2>
            <div className="grid grid-cols-2 gap-2.5 sm:gap-4 lg:gap-6">
              {servicesData.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedService(item)}
                  className="bg-white p-3 sm:p-5 rounded-2xl sm:rounded-3xl shadow-lg shadow-slate-200/50 border border-slate-100 group transition-all hover:-translate-y-1 hover:shadow-xl cursor-pointer flex flex-col relative overflow-hidden"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2 sm:mb-3 relative z-10">
                    <div
                      className={`p-2.5 sm:p-3 bg-${item.color}-50 text-${item.color}-600 rounded-xl sm:rounded-2xl w-fit group-hover:scale-110 transition-transform`}
                    >
                      <item.icon
                        className="w-5 h-5 sm:w-[26px] sm:h-[26px]"
                        strokeWidth={2}
                      />
                    </div>
                    <h3 className="font-bold text-slate-800 text-[13px] sm:text-lg group-hover:text-emerald-600 transition-colors leading-tight">
                      {item.title}
                    </h3>
                  </div>
                  {item.subtitle && (
                    <p className="text-[9px] sm:text-xs font-bold text-rose-500 mb-1.5 sm:mb-2.5 uppercase tracking-wide relative z-10 line-clamp-1">
                      {item.subtitle}
                    </p>
                  )}
                  <ul className="text-[10.5px] sm:text-sm text-slate-600 space-y-1.5 sm:space-y-2.5 font-medium flex-1 relative z-10">
                    {item.shortDesc.map((d, dIndex) => (
                      <li
                        key={dIndex}
                        className="flex items-start gap-1.5 sm:gap-2 leading-snug"
                      >
                        <CheckCircle2
                          className={`w-3.5 h-3.5 sm:w-[18px] sm:h-[18px] text-${item.color}-500 shrink-0`}
                        />
                        <span
                          dangerouslySetInnerHTML={{
                            __html: d.replace(
                              "KHÔNG",
                              '<strong class="text-rose-600">KHÔNG</strong>',
                            ),
                          }}
                        ></span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-3 pt-2 sm:mt-4 sm:pt-3 border-t border-slate-50 flex items-center justify-between text-[9px] sm:text-xs font-bold text-slate-400 group-hover:text-emerald-500 transition-colors relative z-10">
                    <span className="truncate pr-1">Xem chi tiết</span>
                    <Info className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SOCIAL PROOF: KHÁCH HÀNG GIẢI NGÂN */}
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-800 mb-4 sm:mb-5 flex items-center gap-2">
              <ThumbsUp className="text-blue-500" size={24} /> Khách Hàng Gần
              Đây
            </h2>
            <div
              ref={sliderRef}
              className="flex overflow-x-auto gap-4 pb-4 snap-x hide-scrollbar"
            >
              {successStories.map((story) => (
                <div
                  key={story.id}
                  className="w-[280px] sm:w-[320px] shrink-0 bg-white p-4 sm:p-5 rounded-2xl border border-slate-100 shadow-sm snap-center"
                >
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold">
                        {story.customer.charAt(0)}
                      </div>
                      <div>
                        <p className="font-bold text-slate-700 text-sm">
                          {story.customer}
                        </p>
                        <div className="flex items-center text-[10px] text-slate-400 gap-1 mt-0.5">
                          <Clock size={10} /> {story.time} - {story.date}
                        </div>
                      </div>
                    </div>
                    <BadgeCheck className="text-blue-500" size={20} />
                  </div>
                  <div className="bg-emerald-50/50 rounded-xl p-3 border border-emerald-50/50">
                    <p className="text-xs text-slate-500 mb-1">{story.desc}</p>
                    <p className="font-black text-emerald-600 text-lg">
                      {story.amount}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* TUYỂN CTV */}
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-800 mb-4 sm:mb-5 flex items-center gap-2">
              <Megaphone className="text-rose-500 fill-rose-500/20" size={24} />{" "}
              Tuyển CTV Online
            </h2>
            <div className="bg-gradient-to-br from-amber-100 to-orange-100 p-5 sm:p-8 rounded-3xl shadow-lg shadow-orange-200/50 border border-orange-200 relative overflow-hidden group hover:shadow-xl transition-shadow duration-300">
              <div className="absolute -right-10 -top-10 text-orange-400/20 transform rotate-12 group-hover:scale-110 transition-transform duration-500 pointer-events-none">
                <DollarSign size={200} strokeWidth={3} />
              </div>
              <div className="relative z-10">
                <div className="inline-block bg-rose-500 text-white font-black px-4 py-1.5 rounded-full text-[11px] sm:text-sm mb-4 shadow-md animate-pulse uppercase tracking-wider">
                  🔥 TÌM ĐỒNG ĐỘI KIẾM TIỀN
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-800 mb-5 sm:mb-6 leading-snug">
                  Việc Nhẹ Lương Cao - Thu Nhập Không Giới Hạn
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6 mb-5 sm:mb-6">
                  <div className="bg-white/80 backdrop-blur-sm p-4 sm:p-5 rounded-2xl border border-orange-100 shadow-sm">
                    <h4 className="font-bold text-orange-600 flex items-center gap-2 mb-2 sm:mb-3 text-sm sm:text-lg">
                      <DollarSign size={18} className="sm:w-5 sm:h-5" /> Quyền
                      Lợi "Khủng"
                    </h4>
                    <ul className="text-[12px] sm:text-sm text-slate-700 space-y-2 sm:space-y-3 font-medium">
                      <li className="flex items-start gap-2">
                        <CheckCircle2
                          size={16}
                          className="text-orange-500 shrink-0"
                        />{" "}
                        Hoa hồng{" "}
                        <strong className="text-rose-600 text-[13px] sm:text-base">
                          1%
                        </strong>{" "}
                        trên tổng giải ngân
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2
                          size={16}
                          className="text-orange-500 shrink-0"
                        />{" "}
                        <span className="bg-orange-100 text-orange-800 px-1.5 sm:px-2 py-0.5 rounded">
                          VD: Vay 50 triệu → Nhận ngay 500K
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2
                          size={16}
                          className="text-orange-500 shrink-0"
                        />{" "}
                        Làm càng nhiều, tiền "ting ting" càng đều
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white/80 backdrop-blur-sm p-4 sm:p-5 rounded-2xl border border-orange-100 shadow-sm">
                    <h4 className="font-bold text-orange-600 flex items-center gap-2 mb-2 sm:mb-3 text-sm sm:text-lg">
                      <Users size={18} className="sm:w-5 sm:h-5" /> Nhiệm Vụ Rất
                      Dễ
                    </h4>
                    <ul className="text-[12px] sm:text-sm text-slate-700 space-y-2 sm:space-y-3 font-medium">
                      <li className="flex items-start gap-2">
                        <CheckCircle2
                          size={16}
                          className="text-orange-500 shrink-0"
                        />{" "}
                        Điện thoại có mạng là làm được
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2
                          size={16}
                          className="text-orange-500 shrink-0"
                        />{" "}
                        Có sẵn ảnh & bài để đăng FB, Zalo
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2
                          size={16}
                          className="text-orange-500 shrink-0"
                        />{" "}
                        Chỉ việc đưa số khách.{" "}
                        <strong className="text-rose-600">
                          Hồ sơ để Tới lo!
                        </strong>
                      </li>
                    </ul>
                  </div>
                </div>
                <a
                  href={personalInfo.zalo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-rose-500 hover:from-orange-600 hover:to-rose-600 text-white font-bold py-3.5 px-8 rounded-xl transition-all shadow-lg shadow-orange-500/40 w-full sm:w-fit text-sm sm:text-base"
                >
                  <MessageCircle size={18} className="sm:w-5 sm:h-5" /> Inbox
                  Zalo Ứng Tuyển Ngay
                </a>
              </div>
            </div>
          </div>

          {/* FAQ - CÂU HỎI THƯỜNG GẶP */}
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-800 mb-4 sm:mb-5 flex items-center gap-2">
              <HelpCircle className="text-purple-500" size={24} /> Hỏi Đáp Nhanh
            </h2>
            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all duration-200"
                >
                  <button
                    className="w-full text-left px-5 py-4 flex items-center justify-between font-bold text-slate-700 hover:text-emerald-600 transition-colors focus:outline-none"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  >
                    <span className="text-sm sm:text-base pr-4">{faq.q}</span>
                    {openFaq === index ? (
                      <ChevronUp
                        size={20}
                        className="text-emerald-500 shrink-0"
                      />
                    ) : (
                      <ChevronDown
                        size={20}
                        className="text-slate-400 shrink-0"
                      />
                    )}
                  </button>
                  <div
                    className={`px-5 overflow-hidden transition-all duration-300 ease-in-out ${openFaq === index ? "max-h-40 pb-4 opacity-100" : "max-h-0 opacity-0"}`}
                  >
                    <p className="text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-3">
                      {faq.a}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CAM KẾT LÀM VIỆC */}
          <div className="bg-slate-900 text-white rounded-3xl p-5 sm:p-8 shadow-2xl relative overflow-hidden mb-10">
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-emerald-500 rounded-full filter blur-[80px] opacity-40"></div>
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-blue-500 rounded-full filter blur-[80px] opacity-20"></div>
            <h2 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 relative z-10 flex items-center gap-2">
              <ShieldCheck className="text-emerald-400" size={24} /> Cam Kết Làm
              Việc
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6 relative z-10">
              {[
                {
                  icon: Clock,
                  title: "Hỗ trợ 24/7",
                  desc: "Luôn sẵn sàng giải đáp bất kể ngày đêm.",
                },
                {
                  icon: ShieldCheck,
                  title: "Bảo mật thông tin",
                  desc: "Tuyệt đối an toàn dữ liệu khách hàng.",
                },
                {
                  icon: CheckCircle2,
                  title: "Tư vấn minh bạch",
                  desc: "Đúng lãi suất, không phí ẩn bậy bạ.",
                },
              ].map((camket, index) => (
                <div
                  key={index}
                  className="flex flex-row sm:flex-col items-center sm:items-start gap-3 sm:gap-2 bg-white/5 sm:bg-transparent p-3 sm:p-0 rounded-2xl border border-white/10 sm:border-none"
                >
                  <div className="p-2 sm:p-0 bg-emerald-500/20 sm:bg-transparent rounded-xl shrink-0">
                    <camket.icon className="text-emerald-400 w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-[13px] sm:text-base text-white">
                      {camket.title}
                    </h4>
                    <p className="text-[11px] sm:text-sm text-slate-300 leading-relaxed mt-0.5 sm:mt-1">
                      {camket.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* --- CỤM CHỨA NÚT BACK TO TOP & CHATBOT --- */}
      <div className="fixed bottom-24 md:bottom-8 right-4 md:right-8 z-50 flex flex-col items-end gap-3">
        {/* KHUNG CHATBOT NỔI */}
        <div
          className={`bg-white w-[300px] sm:w-[350px] rounded-2xl shadow-2xl overflow-hidden border border-slate-200 transition-all duration-300 origin-bottom-right ${isChatOpen ? "scale-100 opacity-100 mb-2" : "scale-0 opacity-0 h-0 m-0 pointer-events-none"}`}
        >
          <div className="bg-emerald-500 p-4 flex justify-between items-center text-white">
            <div className="flex items-center gap-2">
              <Bot size={24} />
              <span className="font-bold">Trợ lý Tài chính AI</span>
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
                  <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                    <Bot size={16} />
                  </div>
                )}
                <div
                  className={`p-3 rounded-2xl text-sm leading-relaxed max-w-[85%] ${msg.role === "user" ? "bg-emerald-500 text-white rounded-br-sm" : "bg-white border border-slate-200 text-slate-700 rounded-bl-sm"}`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex gap-2 justify-start">
                <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                  <Bot size={16} />
                </div>
                <div className="p-3 bg-white border border-slate-200 rounded-2xl rounded-bl-sm">
                  <Loader2
                    size={16}
                    className="animate-spin text-emerald-500"
                  />
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          <form
            onSubmit={handleSendMessage}
            className="p-3 bg-white border-t border-slate-100 flex gap-2"
          >
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Hỏi AI về lãi suất, hạn mức..."
              className="flex-1 bg-slate-100 rounded-xl px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-500/50"
            />
            <button
              type="submit"
              disabled={isTyping}
              className="bg-emerald-500 hover:bg-emerald-600 text-white w-10 h-10 rounded-xl flex items-center justify-center transition-colors disabled:opacity-50"
            >
              <Send size={18} className={inputText.trim() ? "ml-1" : ""} />
            </button>
          </form>
        </div>

        {/* NÚT BACK TO TOP VÀ NÚT MỞ CHAT */}
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
            className={`w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 text-white relative ${isChatOpen ? "bg-rose-500 hover:bg-rose-600 rotate-90" : "bg-emerald-500 hover:bg-emerald-600 animate-bounce"}`}
          >
            {isChatOpen ? <X size={28} /> : <MessageCircle size={28} />}
            {!isChatOpen && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-rose-500 border-2 border-white rounded-full"></span>
            )}
          </button>
        </div>
      </div>

      {/* THANH LIÊN HỆ ĐÁY MÀN HÌNH (MOBILE) */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-white/90 backdrop-blur-md border-t border-slate-200 p-3 z-[40] shadow-[0_-10px_20px_rgba(0,0,0,0.05)]">
        <div className="flex gap-3">
          <a
            href={`tel:${personalInfo.phone}`}
            className="flex-1 bg-slate-100 text-slate-800 font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 hover:bg-slate-200 transition-colors shadow-sm"
          >
            <PhoneCall size={18} /> Gọi Ngay
          </a>
          <a
            href={personalInfo.zalo}
            target="_blank"
            rel="noreferrer"
            className="flex-[2] bg-emerald-500 text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 hover:bg-emerald-600 transition-colors shadow-lg shadow-emerald-500/40 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-white opacity-20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            <MessageCircle size={18} /> Nhắn Zalo
          </a>
        </div>
      </div>

      {/* MODAL 1: CHI TIẾT DỊCH VỤ */}
      {selectedService && (
        <div
          className="fixed inset-0 z-[100] bg-slate-900/80 backdrop-blur-sm flex flex-col items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedService(null)}
        >
          <div
            className="bg-white w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className={`bg-${selectedService.color}-50 p-5 sm:p-6 border-b border-${selectedService.color}-100 flex justify-between items-start relative overflow-hidden`}
            >
              <div
                className={`absolute -right-4 -top-4 text-${selectedService.color}-500/10 transform rotate-12`}
              >
                <selectedService.icon size={120} />
              </div>
              <div className="relative z-10">
                <div
                  className={`p-2 bg-white text-${selectedService.color}-600 rounded-xl shadow-sm w-fit mb-3`}
                >
                  <selectedService.icon size={28} />
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-800">
                  {selectedService.title}
                </h3>
                <p
                  className={`text-sm font-semibold text-${selectedService.color}-600 mt-1`}
                >
                  {selectedService.fullDetails.subtitle}
                </p>
              </div>
              <button
                onClick={() => setSelectedService(null)}
                className="p-2 bg-white/50 hover:bg-white rounded-full transition-colors relative z-10 text-slate-500"
              >
                <X size={20} />
              </button>
            </div>
            <div className="p-5 sm:p-6 overflow-y-auto flex-1">
              <ul className="space-y-4">
                {selectedService.fullDetails.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2
                      size={20}
                      className={`text-${selectedService.color}-500 shrink-0 mt-0.5`}
                    />
                    <span
                      className="text-slate-700 leading-relaxed text-sm sm:text-base"
                      dangerouslySetInnerHTML={{ __html: point }}
                    ></span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-4 sm:p-5 border-t border-slate-100 bg-slate-50">
              <a
                href={personalInfo.zalo}
                target="_blank"
                rel="noreferrer"
                className={`w-full text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-lg text-sm sm:text-base ${buttonThemes[selectedService.color]}`}
              >
                <MessageCircle size={20} /> Đăng ký tư vấn ngay
              </a>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 2: ẢNH TÀI LIỆU */}
      {viewingImage && (
        <div
          className="fixed inset-0 z-[100] bg-slate-900/95 backdrop-blur-md flex flex-col items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setViewingImage(null)}
        >
          <button
            onClick={() => setViewingImage(null)}
            className="absolute top-4 right-4 text-white hover:text-rose-400 bg-white/10 hover:bg-white/20 p-3 rounded-full transition z-[110] backdrop-blur-md border border-white/10 shadow-2xl"
          >
            <X size={28} />
          </button>
          <img
            src={viewingImage}
            alt="Tài liệu"
            loading="lazy"
            className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl animate-in zoom-in-90 duration-300"
            onClick={(e) => e.stopPropagation()}
          />
          <p className="text-white/60 text-sm mt-6 font-medium tracking-wide bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm">
            Chạm ra ngoài để đóng
          </p>
        </div>
      )}

      <style
        dangerouslySetInnerHTML={{
          __html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `,
        }}
      />
    </div>
  );
}
