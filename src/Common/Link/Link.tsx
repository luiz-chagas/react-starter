import styled from "@emotion/styled";

type Props = React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;

export const Link = ({ children, ...rest }: Props) => {
  return <Anchor {...rest}>{children}</Anchor>;
};

const Anchor = styled.a({
  color: "#61dafb",
});
