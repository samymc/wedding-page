import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const MainLoading = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
          navigate('/intro');
        }, 3000);
        return () => clearTimeout(timer);
      }, [navigate]);
      
    return (
        <div className="loading-wrapper">
          <div className="central-circle"></div>
          <div className="circle c1"></div>
          <div className="circle c2"></div>
          <div className="circle c3"></div>
          <div className="circle c4"></div>
          <div className="circle c5"></div>
          <div className="circle c6"></div>
        </div>
      );
}