import clsx from "clsx";
import { TickCircle } from "iconsax-react";
import { useState } from "react";

export const ProductDescriptionCard = ({ description = "", benefits = [] }) => {
  const sections = [
    { title: "desctiption", value: "description" },
    { title: "showcase", value: "showcase" },
  ];

  const [currentView, setCurrentView] = useState(sections[0].value);

  const Title = ({ title }) => (
    <p className="mb-5 text-2xl font-bold text-slate-700">{title}</p>
  );

  const videoUrl = "https://www.youtube.com/embed/PdJq-dAQr-Y?autoplay=1&mute=1";

  return (
    <section className="mt-3">
      <div className="relative mb-10 flex gap-4">
        {sections.map((section) => (
          <button
            className={clsx("z-10 p-4 capitalize", {
              "text-gray-400": currentView !== section.value,
              "border-b-4 border-blue-900 font-semibold text-blue-900":
                currentView === section.value,
            })}
            onClick={() => setCurrentView(section.value)}
            key={section.value}
          >
            {section.title}
          </button>
        ))}
        <hr className="absolute bottom-0 right-0 h-1 w-full bg-gray-200" />
      </div>
      {currentView === "description" && (
        <div className="flex flex-col gap-8">
          <div>
            <Title title="Product Description" />
            <p className="text-gray-500">{description}</p>
          </div>
          <div>
            <Title title="Benefits" />
            <ul className="flex flex-col gap-4">
              {benefits.map((benefit, i) => (
                <li className="flex gap-2 text-gray-500" key={"benefit" + i}>
                  <div>
                    <TickCircle variant="Bulk" color="#3878d0" />
                  </div>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
      {currentView === "showcase" && (
        <div className="px-5">
          <iframe
            src={videoUrl}
            allow="accelerometer; autoplay; encrypted-media"
            allowFullScreen
            className="aspect-video max-h-96 rounded-xl"
            width="100%"
            title="Embedded youtube"
          />
        </div>
      )}
    </section>
  );
};
