import Header from "../Header";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination , Navigation, Autoplay} from "swiper/modules";
import NovelsSecondary from "../NovelsSecondary";
export default function RowNovels({ title, novels }) {
    return (
        <div className="header md:overflow-hidden">
            <Header title={title} is_expand={true} />
            <div className="fill-width">
                <Swiper
                    breakpoints={{
                        0: {
                            slidesPerView: 2,
                        },
                        640: {
                            slidesPerView: 3,
                        },
                        768: {
                            slidesPerView: 4,
                        },
                        1024: {
                            slidesPerView: 5,
                        },
                    }}
                    spaceBetween={10}
                    pagination={{ 
                        dynamicBullets: true,
                        // clickable: true 
                    }}
                    modules={[Pagination, Navigation, Autoplay]}
                    loop={true}
                >
                    {novels.map((novel) => (
                        <SwiperSlide key={novel.id}>
                            <NovelsSecondary novel={novel} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}
