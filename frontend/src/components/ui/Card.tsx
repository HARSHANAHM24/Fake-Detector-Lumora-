import "./Card.css";

interface CardProps {
  title?: string;
  children: React.ReactNode;
}

function Card({ title, children }: CardProps) {
  return (
    <div className="lumora-card">
      {title && (
        <h2 className="lumora-card-title">
          {title}
        </h2>
      )}

      <div className="lumora-card-content">
        {children}
      </div>
    </div>
  );
}

export default Card;