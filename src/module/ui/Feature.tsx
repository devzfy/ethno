export default function Features() {
  const features = [
    {
      id: 1,
      title: '95% выпускников нашли работу после обучения',
    },
    {
      id: 2,
      title: 'Изучай курс, который научил логистике 2000+ человек',
    },
    {
      id: 3,
      title: 'Практические знания и поддержка от экспертов',
    },
    {
      id: 4,
      title: 'Первый заработок уже во время обучения',
    },
  ];

  return (
    <section className="mt-3">
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          {features.map(feature => (
            <FeatureCard key={feature.id} title={feature.title} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ title }: { title: string }) {
  return (
    <div className="bg-[#141414] xl:rounded-4xl md:rounded-[18px] rounded-[14px] py-9 xl:py-14 flex justify-center items-center">
      <h3 className="xl:text-[21px] bold text-sm text-white text-center">
        {title}
      </h3>
    </div>
  );
}
