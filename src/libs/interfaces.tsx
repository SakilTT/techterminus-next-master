export interface MenuItem {
  id: number;
  label: string;
  url: string;
  isExternal: boolean;
  children?: MenuItem[];
}

export interface GallryImageItem {
  id: number;
  label: string;
  imgURL: string;
}

export interface GallryMenuItem {
  galleryTitle: string;
  galleryImages: GallryImageItem[];
  contactInfoTitle: string;
  address: string;
  email: string;
  phone: string;
  twitterLink: string;
  facebookLink: string;
  linkedinLink: string;
  instagramLink: string;
  pinterestLink: string;
}

export interface TitleAndDescriptionData {
  TitleItem: SectionTitleData;
  Description: string;
}

export interface SectionTitleData {
  SectionTitle: string;
  SectionMainTitle: string;
}

export interface MenuProps {
  items: MenuItem[];
}

export interface ThreeColumnBoxItem {
  id: number;
  Title: string;
  Icon: string;
  BgImg: string;
  HoverBgImg: string;
  Description: string;
  LinkUrl: string;
  LinkText: string;
  isWhite?: boolean;
  isBoxBorder?: boolean;
}

export interface ThreeColumnBoxesProps {
  TitleItem: SectionTitleData;
  items: ThreeColumnBoxItem[];
}

export interface HomeClientItem {
  id: number;
  src: string;
  alt: string;
}

export interface HeaderBanner {
  title: string;
  BgImgURL: string;
}

export interface TestimonialsSliderItem {
  id: number;
  avatar: string;
  designation: string;
  name: string;
  description: string;
}

export interface BlogItem {
  id: number;
  src: string;
  alt: string;
  title: string;
  description: string;
  date: string;
  author: string;
}

export interface HomeHeroSliderItem {
  id: number;
  title: string;
  iconImg: string;
  thumbImg: string;
  backgroundImage: string;
  buttonText: string;
  buttonLink: string;
  description: string;
  isDefault: boolean;
  leftWidth: string;
  rightWidth: string;
  leftImage: string;
  rightImage: string;
  leftImageLeft: string;
  leftImageTop: string;
  rightImageRight: string;
  rightImageTop: string;
}

export interface OurPhilosophyItem {
  id: number;
  bgImgSrc: string;
  title: string;
  description: string;
  iconImg: string;
}

export interface OurPhilosophyProps {
  items: OurPhilosophyItem[];
  sectionTitle: string;
  sectionSubTitle: string;
}

export interface OurJourneyItem {
  id: number;
  title: string;
  description: string;
  iconImg: string;
  year: string;
}

export interface ChooseTheBestArchitectItem {
  id: number;
  srNO: string;
  title: string;
  description: string;
}

export interface ChooseTheBestArchitectProps {
  items: ChooseTheBestArchitectItem[];
  sectionTitle: string;
  sectionSubTitle: string;
  sectionImg: string;
}

export interface OurWorkingProcessItem {
  id: number;
  srNO: string;
  tabIcon: string;
  tabHoverIcon: string;
  tabTitle: string;
  tabImage: string;
}

export interface OurPhilosophyIsSimplicityItem {
  id: number;
  icon: string;
  title: string;
}

export interface OurPhilosophyIsSimplicityProps {
  items: OurPhilosophyIsSimplicityItem[];
  mainTitle: string;
  description: string;
}

export interface OurServicesImageAndDescItem {
  id: number;
  title: string;
  subTitle: string;
  tabIcon: string;
  description: string;
}

export interface OurServicesPageProps {
  items: OurServicesImageAndDescItem[];
  pageBgImage: string;
}

export interface CurrentOpeningsSubItem {
  id: number;
  title: string;
  description: string;
}

export interface CurrentOpeningsItem {
  id: number;
  desigmation: string;
  position: number;
  qualification: string;
  experience: string;
  jobLocation: string;
  reportingTo: string;
  salary: string;
  jobDescItems: CurrentOpeningsSubItem[];
  applyBtnText: string;
  applyBtnURL: string;
}

export interface ImageAndTextItem {
  title: string;
  imageURL: string;
  description: string;
}

export interface GalleryImagesitem {
  id: number;
  src: string;
  alt: string,
  category: string,
  thumb?: string;
}

export interface OurClientItem {
  id: number;
  src: string;
  hoverSrc?: string;
  alt: string,
  title: string,
  desc: string;
}