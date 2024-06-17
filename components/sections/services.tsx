import ServicesCard from "@/components/services-card";
import { services } from "@/constants";

const Services = () => {
  return (
    <section className="max-container flex justify-center flex-wrap gap-9">
      {services.map((service, index) => (
        <ServicesCard key={index} data={service} />
      ))}
    </section>
  );
};

export default Services;
