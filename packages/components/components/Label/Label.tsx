import React from "react";
import { styled } from "../../stitches.config";

export interface ILabelProps {
  label?: string;
  description?: string;
  required?: boolean;
  error?: string;
  children?: React.ReactNode;
}

const Input = ({ label, description, required, error, children }: ILabelProps) => {
  return (
    <Container>
      <LabelRow>
        <Label>{label}</Label>
        {required && <Required>(Required)</Required>}
      </LabelRow>
      {description && <Description>{description}</Description>}
      <ChildContainer>{children}</ChildContainer>
      {error && <Error>{error}</Error>}
    </Container>
  );
}

const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
});

const LabelRow = styled("div", {
  display: "flex",
  mb: "$1",
});

const Required = styled("div", {
  fontFamily: "$mono",
  fontSize: "$sm",
  textTransform: "uppercase",
  fontWeight: 400,
  fontStyle: "italic",
  ml: "$2",
});

const Label = styled("div", {
  fontFamily: "$mono",
  fontWeight: 600,
  fontSize: "$sm",
  textTransform: "uppercase",
});

const Description = styled("div", {
  fontFamily: "$sans",
  fontSize: "$sm",
  mb: "$1",
});

const ChildContainer = styled("div", {
  fontFamily: "$sans",
  fontSize: "$sm",
  my: "$1",
  display: "flex",
});

const Error = styled("div", {
  fontFamily: "$sans",
  fontSize: "$sm",
  color: "#FF0000",
  mt: "$1",
});

export default Input;
