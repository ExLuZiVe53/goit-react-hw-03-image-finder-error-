import { Button } from "./Button.styled";

export const BTNLoadMore = ({ onChange }) => {
  return <Button onClick={() => onChange()}>Load More</Button>;
};