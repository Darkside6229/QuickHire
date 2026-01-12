import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { APP_NAME, ROUTES } from '../utils/constants';

const pageTitles: Record<string, string> = {
  [ROUTES.HOME]: `${APP_NAME} - Hire Freelancers Online`,
  [ROUTES.ABOUT]: `About Us - ${APP_NAME}`,
  [ROUTES.CONTACT]: `Contact Us - ${APP_NAME}`,
  [ROUTES.DASHBOARD]: `Dashboard - ${APP_NAME}`,
  [ROUTES.LOGIN]: `Login - ${APP_NAME}`,
  [ROUTES.SIGNUP]: `Sign Up - ${APP_NAME}`,
  [ROUTES.FIND_WORK]: `Find Work - ${APP_NAME}`,
  [ROUTES.HIRE]: `Hire Freelancers - ${APP_NAME}`,
};

const PageTitle = () => {
  const location = useLocation();

  useEffect(() => {
    const title = pageTitles[location.pathname] || APP_NAME;
    document.title = title;
  }, [location.pathname]);

  return null;
};

export default PageTitle;
