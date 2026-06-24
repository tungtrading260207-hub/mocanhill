"use client";

import { useState } from "react";
import { Phone, MessageCircle, MapPin, Mountain, TreePine, Wifi, Car, UtensilsCrossed, Clock } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const [data] = useState({
    name: "Mộc An Hill",
    description: "Nghỉ dưỡng thiên nhiên - Tựa lưng vào núi - Tách biệt ồn ào",
    phone: "0986683168",
    zalo: "https://zalo.me/0986683168",
    
    hero: "https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=1920&q=80",

    gallery: [
      "/images/FB_IMG_1754842629246.jpg",
      "/images/IMG_1714478133569_1714478234712.jpg",
      "/images/IMG_1714478133676_1714478238651.jpg",
      "/images/IMG_20240818_214014.jpg",
      "/images/z5729432922456_7838d8170941b84e6fe92dca009403c5.jpg",
      "/images/z5729432938305_e143c57a79b00e1ae834c534cf58b883.jpg",
      "/images/z5729432991794_7bac31d981b84b13aba3599ce88e2c73.jpg",
      "/images/z5729432998363_46d6954eb8b40117b8f85e3bd750123a.jpg",
      "/images/z5729433010050_65262db88ffea7c70170bc21ccddb9f3.jpg"
    ],

    rooms: [
      {
        name: "Nhà sàn Mộc An",
        price: "1.800.000đ",
        unit: "/ đêm",
        image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80",
        capacity: "2-4 người",
        description: "View núi tuyệt đẹp, không gian yên tĩnh"
      },
      {
        name: "Phòng Đôi Cao Cấp",
        price: "1.200.000đ",
        unit: "/ đêm",
        image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
        capacity: "2 người",
        description: "Tiện nghi đầy đủ, view vườn"
      },
      {
        name: "Villa Gia Đình",
        price: "2.500.000đ",
        unit: "/ đêm",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
        capacity: "4-6 người",
        description: "Không gian riêng tư, phù hợp gia đình"
      },
    ],

    amenities: [
      { icon: Mountain, label: "View núi" },
      { icon: TreePine, label: "Không gian xanh" },
      { icon: Wifi, label: "Wifi miễn phí" },
      { icon: Car, label: "Bãi đỗ xe" },
      { icon: UtensilsCrossed, label: "Ẩm thực địa phương" },
      { icon: Clock, label: "Check-in 24/7" },
    ]
  });

  const handleCall = () => (window.location.href = `tel:${data.phone}`);
  const handleZalo = () => window.open(data.zalo, "_blank");

  return (
    <main className="bg-zinc-950 text-zinc-50 font-sans selection:bg-emerald-500 selection:text-white">
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center">
        <div className="absolute inset-0">
          <Image 
            src={data.hero}
            alt="Mộc An Hill - Khu nghỉ dưỡng"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/60 via-zinc-950/40 to-zinc-950" />
        </div>
        
        <div className="relative z-10 px-4 max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-6">
            <MapPin className="w-5 h-5 text-emerald-400" />
            <span className="text-emerald-400 text-sm tracking-wider uppercase">Việt Nam</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight text-balance">
            {data.name}
          </h1>
          
          <p className="text-lg md:text-xl text-zinc-300 mb-10 max-w-2xl mx-auto leading-relaxed text-pretty">
            {data.description}
          </p>

          <div className="bg-zinc-900/80 backdrop-blur-xl border border-zinc-800 p-6 md:p-8 rounded-2xl">
            <p className="mb-6 font-medium text-zinc-300">Liên hệ đặt phòng nhanh</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={handleCall} 
                className="flex items-center justify-center gap-3 bg-zinc-50 text-zinc-900 font-semibold px-8 py-4 rounded-xl hover:bg-zinc-200 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                <Phone className="w-5 h-5" />
                {data.phone}
              </button>
              <button 
                onClick={handleZalo} 
                className="flex items-center justify-center gap-3 bg-blue-500 text-white font-semibold px-8 py-4 rounded-xl hover:bg-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5" />
                Chat Zalo
              </button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-zinc-400 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-2.5 bg-zinc-400 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-16 px-6 border-b border-zinc-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {data.amenities.map((amenity, i) => (
              <div key={i} className="flex flex-col items-center text-center p-4">
                <div className="w-14 h-14 bg-zinc-900 border border-zinc-800 rounded-xl flex items-center justify-center mb-3">
                  <amenity.icon className="w-6 h-6 text-emerald-400" />
                </div>
                <span className="text-sm text-zinc-400">{amenity.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Không gian thực tế</h2>
            <p className="text-zinc-400 max-w-xl mx-auto">Hình ảnh chân thực từ khu nghỉ dưỡng Mộc An Hill</p>
            <div className="h-1 w-16 bg-emerald-500 mx-auto mt-6 rounded-full" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {data.gallery.map((img, i) => (
              <div key={i} className="group relative overflow-hidden rounded-2xl aspect-[4/3]">
                <Image 
                  src={img} 
                  alt={`Mộc An Hill - Không gian ${i+1}`} 
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accommodation Info Section */}
      <section className="py-20 px-6 bg-zinc-900/50">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Thông tin lưu trú</h2>
            <div className="h-1 w-16 bg-emerald-500 mx-auto mt-6 rounded-full" />
          </div>
          
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 md:p-12 text-zinc-300 leading-relaxed space-y-8">
            <div>
              <p className="text-xl text-emerald-400 font-bold mb-4">MỘC AN HILL kính chào quý khách!</p>
              <p className="mb-4">
                Mộc An Hill nằm giữa lưng chừng đồi, view trọn núi cả hùng vĩ, cùng không gian xanh rộng lớn bởi những cánh đồng lúa xanh ngát, thấp thoáng những ngọn đồi nhấp nhô cùng với cây cối bao trùm nơi núi rừng Tây Bắc. Lối thiết mang phong cách dân tộc Mường cổ truyền, kết hợp cùng thảm thực vật hoang sơ, với không khí thiên nhiên trong lành yên tĩnh. Mộc An Hill hứa hẹn sẽ mang đến cho bạn nhiều trải nghiệm du lịch đáng nhớ.
              </p>
              <p>
                <strong className="text-white">Diện tích:</strong> 3000m2, sức chứa 6 gia đình (12-20 người cả trẻ nhỏ).
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-8 h-px bg-emerald-500"></span> TIỆN ÍCH
              </h3>
              <p className="mb-4">
                2 phòng ngủ riêng, 1 phòng cộng đồng, 2 khu WC, Bể bơi 50m3, Bi-a bàn Alex, Wifi, Smart tivi, tủ lạnh, Máy lọc nước uống, Game playSation, Game băng 4 nút, cầu lông, Bếp lửa trại, Bếp nướng BBQ ngoài trời. Ngoài ra Mộc An còn có đủ các dụng cụ làm bếp bạn dùng thoải mái: vỉ nướng, kẹp, xiên nướng, bếp lẩu, nồi, xoong, bát, đũa...
              </p>
              <p className="text-zinc-400 italic">
                Hỗ trợ: Mộc An miễn phí check in sớm và check out muộn nếu trước và sau ngày bạn nghỉ Mộc An ko có đoàn lên nữa nhé.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-8 h-px bg-emerald-500"></span> GIÁ DỊCH VỤ (ưu đãi)
              </h3>
              <p className="mb-4">
                <strong className="text-emerald-400 text-lg">3,5tr-5tr/đêm nghỉ</strong> (sử dụng trọn cả khu).
              </p>
              <p>
                <strong className="text-white">Liên hệ:</strong> <a href="tel:0986683168" className="text-emerald-400 hover:underline">0986683168</a> - Mr Tùng. Bạn sẽ thuê toàn bộ cả khu, Mộc An không bán phòng lẻ, giá phòng không cố định, tùy thuộc vào ngày bạn đặt, trong tuần, cuối tuần hay dịp lễ tết, nên bạn vui lòng nhắn tin hoặc gọi trực tiếp hotline Mr Tùng 0986683168 để check giá ngày bạn đặt nhé!
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-8 h-px bg-emerald-500"></span> DỊCH VỤ THÊM
              </h3>
              <ul className="space-y-3 list-disc list-inside">
                <li><strong className="text-white">Than hoa:</strong> 25k/kg</li>
                <li><strong className="text-white">Củi đốt lửa trại:</strong> 250k/bếp/2 tiếng</li>
                <li><strong className="text-white">Loa kéo:</strong> 250k/ngày (tối chỉ hát đến 22h00, ban ngày hát thoải mái)</li>
                <li><strong className="text-white">Đồ ăn:</strong> Mộc An không phục vụ, bạn có thể mang sẵn đồ từ nhà đi hoặc đi chợ phiên về tự nấu. Mộc An có đủ xoong nồi giúp bạn làm bếp như ở nhà, hoặc đặt các nhà hàng gần đó cũng rất ngon và rẻ, Mộc An có thể tư vấn thêm cho bạn.</li>
                <li><strong className="text-white">Dịch vụ dọn dẹp:</strong> Rửa bát, quét nhà 200-500k/lần tùy vào quy mô buổi tiệc bạn tổ chức.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Sẵn sàng trải nghiệm?</h2>
          <p className="text-zinc-400 mb-8 max-w-xl mx-auto">
            Liên hệ ngay để đặt phòng và nhận ưu đãi đặc biệt từ Mộc An Hill
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleCall} 
              className="flex items-center justify-center gap-3 bg-zinc-50 text-zinc-900 font-semibold px-8 py-4 rounded-xl hover:bg-zinc-200 transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
              Gọi ngay: {data.phone}
            </button>
            <button 
              onClick={handleZalo} 
              className="flex items-center justify-center gap-3 bg-blue-500 text-white font-semibold px-8 py-4 rounded-xl hover:bg-blue-600 transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5" />
              Nhắn tin Zalo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-2">{data.name}</h3>
          <p className="text-zinc-400 mb-6">{data.description}</p>
          <div className="flex items-center justify-center gap-4 text-sm text-zinc-500">
            <a href={`tel:${data.phone}`} className="hover:text-emerald-400 transition-colors">
              {data.phone}
            </a>
            <span>|</span>
            <a href={data.zalo} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">
              Zalo
            </a>
          </div>
          <p className="text-zinc-600 text-sm mt-8">
            &copy; {new Date().getFullYear()} Mộc An Hill. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
        <button 
          onClick={handleCall} 
          className="bg-zinc-50 text-zinc-900 p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 hover:shadow-emerald-500/20"
          aria-label="Gọi điện"
        >
          <Phone className="w-6 h-6" />
        </button>
        <button 
          onClick={handleZalo} 
          className="bg-blue-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 hover:shadow-blue-500/30"
          aria-label="Chat Zalo"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      </div>
    </main>
  );
}
