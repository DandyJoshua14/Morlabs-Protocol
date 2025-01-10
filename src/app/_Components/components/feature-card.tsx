

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}

// Ensure to add necessary props for the Card component as per its definition
export function FeatureCard({ icon: Icon, title, children }: FeatureCardProps) {
  return (
    <div className="card bg-transparent w-96">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p>{title}</p>
        <div className="card-actions justify-end">
          Dandy Joshua, CEO, SophNex Solutions
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>

  );
}

export default FeatureCard;