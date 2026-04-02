// src/Profile.js
import React, { useState } from "react";
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
    facebook: "https://www.facebook.com/share/18GYBNzLZC/",
    email: "tovantoi.finance@gmail.com",
    location: "Toàn quốc",
    bio: "Với hơn 3 năm kinh nghiệm tại FE Credit, tôi cam kết mang đến cho khách hàng các giải pháp vay vốn tối ưu, minh bạch về lãi suất và giải ngân nhanh chóng nhất.",
  };

  const [viewingImage, setViewingImage] = useState(null);
  const [selectedService, setSelectedService] = useState(null);

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

  const servicesData = [
    {
      id: "vay-tien-mat",
      icon: Banknote,
      color: "emerald",
      title: "Vay Tiền Mặt",
      shortDesc: [
        "Hạn mức tới 100 triệu",
        "CCCD gắn chip",
        "Bảng lãi chi tiết",
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
        "KHÔNG phí thường niên trọn đời",
        "KHÔNG phí rút tiền mặt tại ATM",
        "KHÔNG chờ thẻ vật lý (Dùng ngay)",
        "KHÔNG giấy tờ (Chỉ cần CCCD)",
        "KHÔNG giới hạn ưu đãi (Hoàn tiền 1%)",
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
        "Trả trước từ 20%",
        "Nhận ngay Cà vẹt gốc",
        "Duyệt nhanh 15 phút",
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
        "Lãi suất 0.99%",
        "iPhone, Samsung, Laptop...",
        "Duyệt hồ sơ siêu tốc",
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

  return (
    <div className="min-h-screen bg-slate-100 font-sans text-slate-800 pb-28 md:pb-12 selection:bg-emerald-200 relative">
      <div className="absolute top-0 left-0 w-full h-[40vh] md:h-[45vh] bg-gradient-to-br from-emerald-600 via-teal-700 to-sky-800 z-0 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="absolute inset-0 flex items-start justify-center pt-10 md:pt-20 opacity-[0.03] select-none pointer-events-none">
          <h1 className="text-[120px] sm:text-[180px] md:text-[220px] lg:text-[250px] font-black tracking-tighter -rotate-12 whitespace-nowrap text-white">
            FE-Credits
          </h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 pt-20 sm:pt-32 relative z-10 flex flex-col md:flex-row gap-6 lg:gap-8">
        {/* CỘT TRÁI */}
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
                {/* ĐÃ FIX LINK GMAIL TRỰC TIẾP Ở ĐÂY */}
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
        <div className="w-full md:w-[65%] lg:w-[70%] space-y-8">
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
              // ĐÃ FIX LINK GMAIL TRỰC TIẾP Ở ĐÂY CHO MOBILE
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
            <h2 className="text-xl sm:text-2xl font-black text-slate-800 mb-5 flex items-center gap-2 md:text-white drop-shadow-md">
              <Star className="text-amber-400 fill-amber-400" size={24} /> Dịch
              Vụ Nổi Bật
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
              {servicesData.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedService(item)}
                  className="bg-white p-5 rounded-3xl shadow-lg shadow-slate-200/50 border border-slate-100 group transition-all hover:-translate-y-1 hover:shadow-xl cursor-pointer flex flex-col relative overflow-hidden"
                >
                  <div className="flex items-center gap-3 mb-3 relative z-10">
                    <div
                      className={`p-3 bg-${item.color}-50 text-${item.color}-600 rounded-2xl group-hover:scale-110 transition-transform`}
                    >
                      <item.icon size={26} strokeWidth={2} />
                    </div>
                    <h3 className="font-bold text-slate-800 text-lg group-hover:text-emerald-600 transition-colors">
                      {item.title}
                    </h3>
                  </div>

                  {item.subtitle && (
                    <p className="text-xs font-bold text-rose-500 mb-2.5 uppercase tracking-wide relative z-10">
                      {item.subtitle}
                    </p>
                  )}

                  <ul className="text-sm text-slate-600 space-y-2.5 font-medium flex-1 relative z-10">
                    {item.shortDesc.map((d, dIndex) => (
                      <li key={dIndex} className="flex items-start gap-2">
                        <CheckCircle2
                          size={18}
                          className={`text-${item.color}-500 shrink-0`}
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

                  <div className="mt-4 pt-3 border-t border-slate-50 flex items-center justify-between text-xs font-bold text-slate-400 group-hover:text-emerald-500 transition-colors relative z-10">
                    <span>Xem chi tiết quyền lợi</span>
                    <Info size={14} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* TUYỂN CTV */}
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-800 mb-5 flex items-center gap-2">
              <Megaphone className="text-rose-500 fill-rose-500/20" size={24} />{" "}
              Tuyển CTV Online
            </h2>
            <div className="bg-gradient-to-br from-amber-100 to-orange-100 p-5 sm:p-8 rounded-3xl shadow-lg shadow-orange-200/50 border border-orange-200 relative overflow-hidden group hover:shadow-xl transition-shadow duration-300">
              <div className="absolute -right-10 -top-10 text-orange-400/20 transform rotate-12 group-hover:scale-110 transition-transform duration-500 pointer-events-none">
                <DollarSign size={200} strokeWidth={3} />
              </div>

              <div className="relative z-10">
                <div className="inline-block bg-rose-500 text-white font-black px-4 py-1.5 rounded-full text-sm mb-4 shadow-md animate-pulse uppercase tracking-wider">
                  🔥 TÌM ĐỒNG ĐỘI KIẾM TIỀN
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-slate-800 mb-6 leading-snug">
                  Việc Nhẹ Lương Cao - Thu Nhập Không Giới Hạn
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6">
                  <div className="bg-white/80 backdrop-blur-sm p-4 sm:p-5 rounded-2xl border border-orange-100 shadow-sm">
                    <h4 className="font-bold text-orange-600 flex items-center gap-2 mb-3 text-base sm:text-lg">
                      <DollarSign size={20} /> Quyền Lợi "Khủng"
                    </h4>
                    <ul className="text-sm text-slate-700 space-y-3 font-medium">
                      <li className="flex items-start gap-2">
                        <CheckCircle2
                          size={18}
                          className="text-orange-500 shrink-0"
                        />{" "}
                        Hoa hồng{" "}
                        <strong className="text-rose-600 text-base">1%</strong>{" "}
                        trên tổng giải ngân
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2
                          size={18}
                          className="text-orange-500 shrink-0"
                        />{" "}
                        <span className="bg-orange-100 text-orange-800 px-2 py-0.5 rounded">
                          VD: Vay 50 triệu → Nhận ngay 500K
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2
                          size={18}
                          className="text-orange-500 shrink-0"
                        />{" "}
                        Làm càng nhiều, tiền "ting ting" càng đều
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white/80 backdrop-blur-sm p-4 sm:p-5 rounded-2xl border border-orange-100 shadow-sm">
                    <h4 className="font-bold text-orange-600 flex items-center gap-2 mb-3 text-base sm:text-lg">
                      <Users size={20} /> Nhiệm Vụ Rất Dễ
                    </h4>
                    <ul className="text-sm text-slate-700 space-y-3 font-medium">
                      <li className="flex items-start gap-2">
                        <CheckCircle2
                          size={18}
                          className="text-orange-500 shrink-0"
                        />{" "}
                        Điện thoại có mạng là làm được
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2
                          size={18}
                          className="text-orange-500 shrink-0"
                        />{" "}
                        Có sẵn ảnh & bài để đăng FB, Zalo
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2
                          size={18}
                          className="text-orange-500 shrink-0"
                        />{" "}
                        Chỉ việc đưa số khách.{" "}
                        <strong className="text-rose-600">
                          Tư vấn & Hồ sơ để Tới lo!
                        </strong>
                      </li>
                    </ul>
                  </div>
                </div>

                <a
                  href={personalInfo.zalo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-rose-500 hover:from-orange-600 hover:to-rose-600 text-white font-bold py-3.5 px-8 rounded-xl transition-all shadow-lg shadow-orange-500/40 w-full sm:w-fit text-base"
                >
                  <MessageCircle size={20} /> Inbox Zalo Ứng Tuyển Ngay
                </a>
              </div>
            </div>
          </div>

          {/* TÀI LIỆU & BẢNG LÃI */}
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-800 mb-5 flex items-center gap-2">
              <FileText className="text-emerald-500" size={24} /> Bảng Lãi &
              Chính Sách
            </h2>
            <div className="bg-white p-4 sm:p-6 rounded-3xl shadow-lg shadow-slate-200/50 border border-slate-100 space-y-3">
              {documentImages.map((doc) => (
                <div
                  key={doc.id}
                  onClick={() => setViewingImage(doc.url)}
                  className="flex items-center justify-between p-4 bg-slate-50 border border-slate-100 rounded-2xl cursor-pointer hover:bg-emerald-50 hover:border-emerald-100 transition-all group shadow-sm hover:shadow"
                >
                  <div className="flex items-center gap-4 flex-1 min-w-0">
                    <div className="p-2.5 bg-white text-emerald-600 rounded-xl shadow-sm shrink-0 group-hover:scale-110 transition-transform">
                      <FileText size={20} strokeWidth={2.5} />
                    </div>
                    <p className="text-sm sm:text-base font-bold text-slate-800 truncate group-hover:text-emerald-700 transition-colors">
                      {doc.name}
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs sm:text-sm text-emerald-600 font-bold shrink-0 ml-3 bg-emerald-100/50 px-3 py-1.5 rounded-lg group-hover:bg-emerald-200 transition-colors">
                    <Eye size={16} />{" "}
                    <span className="hidden sm:inline">Bấm xem</span>
                    <span className="sm:hidden">Xem</span>
                  </div>
                </div>
              ))}
              <p className="text-center text-[12px] sm:text-sm text-slate-400 pt-3 italic font-medium">
                *Bấm vào từng mục để xem ảnh chi tiết.
              </p>
            </div>
          </div>

          {/* CAM KẾT */}
          <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden mb-10">
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-emerald-500 rounded-full filter blur-[80px] opacity-40"></div>
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-blue-500 rounded-full filter blur-[80px] opacity-20"></div>
            <h2 className="text-xl font-bold mb-6 relative z-10 flex items-center gap-2">
              <ShieldCheck className="text-emerald-400" size={26} /> Cam Kết Làm
              Việc
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 relative z-10">
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
                <div key={index} className="flex flex-col gap-2">
                  <camket.icon
                    className="text-emerald-400 shrink-0"
                    size={24}
                  />
                  <h4 className="font-bold text-base">{camket.title}</h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {camket.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* THANH LIÊN HỆ ĐÁY MÀN HÌNH */}
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

      {/* MODAL 1: HIỂN THỊ CHI TIẾT DỊCH VỤ */}
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
            <div className="p-5 border-t border-slate-100 bg-slate-50">
              <a
                href={personalInfo.zalo}
                target="_blank"
                rel="noreferrer"
                className={`w-full bg-${selectedService.color}-500 text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 hover:bg-${selectedService.color}-600 transition-colors shadow-lg shadow-${selectedService.color}-500/30`}
              >
                <MessageCircle size={20} /> Đăng ký tư vấn ngay
              </a>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 2: PHÓNG TO ẢNH TÀI LIỆU */}
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
            className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl animate-in zoom-in-90 duration-300"
            onClick={(e) => e.stopPropagation()}
          />
          <p className="text-white/60 text-sm mt-6 font-medium tracking-wide bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm">
            Chạm ra ngoài để đóng
          </p>
        </div>
      )}
    </div>
  );
}
