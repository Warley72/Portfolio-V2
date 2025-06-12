export interface AboutProps {
    about: string;
    subtext: string;
    textIntroduction: string;
    titleAbout: string;
    textAbout: string;
    textTechnologies: string;
    textCareer: string;
    titleCarerr: string;
    dateCarerr: string;
    currentCarrer: string;
    previousCareer: PreviousCareerProps[]; 
}

export interface PreviousCareerProps {
  title: string;
  company: string;
  date: string;
}