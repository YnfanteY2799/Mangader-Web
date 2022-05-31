export type CardsProps = {
  title: string;
  img: JSX.Element;
  whereTo: string;
  description: string;
  tags?: Array<object>;
  className: string;
};

export default function Card({}: CardsProps): JSX.Element {
  return <>Cards</>;
}
