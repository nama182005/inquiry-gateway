
import { Award, Calendar, ExternalLink } from "lucide-react";

interface CertificationCardProps {
  certification: {
    id: string;
    name: string;
    issuer: string;
    issueDate: string;
    expiryDate?: string;
    credentialId?: string;
    credentialUrl?: string;
    imageUrl?: string;
  };
}

const CertificationCard = ({ certification }: CertificationCardProps) => {
  return (
    <div className="card-preskilet flex flex-col h-full animate-scale-in">
      <div className="flex-1">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h3 className="text-lg font-medium text-preskilet-charcoal">{certification.name}</h3>
            <p className="text-sm text-preskilet-gray">{certification.issuer}</p>
          </div>
          {certification.imageUrl ? (
            <img 
              src={certification.imageUrl} 
              alt={certification.name} 
              className="w-12 h-12 object-contain rounded-md"
            />
          ) : (
            <div className="w-12 h-12 flex items-center justify-center rounded-md bg-preskilet-turquoise/10">
              <Award size={24} className="text-preskilet-turquoise" />
            </div>
          )}
        </div>

        <div className="mt-4 space-y-2">
          <div className="flex items-center text-sm text-preskilet-gray">
            <Calendar size={15} className="mr-1.5" />
            <span>Issued: {certification.issueDate}</span>
          </div>
          
          {certification.expiryDate && (
            <div className="flex items-center text-sm text-preskilet-gray">
              <Calendar size={15} className="mr-1.5" />
              <span>Expires: {certification.expiryDate}</span>
            </div>
          )}
          
          {certification.credentialId && (
            <div className="flex items-center text-xs text-preskilet-gray mt-1">
              <span className="font-medium">ID:</span>
              <span className="ml-1 truncate">{certification.credentialId}</span>
            </div>
          )}
        </div>
      </div>

      {certification.credentialUrl && (
        <div className="mt-4 pt-4 border-t border-preskilet-silver/20">
          <a
            href={certification.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center text-sm font-medium text-preskilet-turquoise hover:text-preskilet-turquoise/80 transition-colors"
          >
            <span>View Credential</span>
            <ExternalLink size={14} className="ml-1.5" />
          </a>
        </div>
      )}
    </div>
  );
};

export default CertificationCard;
