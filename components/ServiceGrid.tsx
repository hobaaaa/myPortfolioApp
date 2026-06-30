import { ServiceCard } from "@/components/ServiceCard";
import type { Service } from "@/data/services";

type ServiceGridProps = {
  services: Service[];
};

export function ServiceGrid({ services }: ServiceGridProps) {
  return (
    <div className="mt-10 grid items-stretch gap-5 md:grid-cols-2 xl:grid-cols-3">
      {services.map((service, index) => (
        <ServiceCard key={service.title} service={service} index={index} />
      ))}
    </div>
  );
}
