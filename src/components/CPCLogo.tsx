import imgCPCLogo from 'figma:asset/9b429fba7a811c989691dbc4dac7c3965258b0ac.png';

interface CPCLogoProps {
  className?: string;
}

export function CPCLogo({ className = '' }: CPCLogoProps) {
  return (
    <img 
      src={imgCPCLogo} 
      alt="Cancer Prevention and Control" 
      className={className}
    />
  );
}