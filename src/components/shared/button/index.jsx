import { Button } from '@chakra-ui/react';
import Link from 'next/link';

function LinkButton({ href, children, target, ...props }) {
  return (
    <Link href={href}>
      <Button size={'lg'} w="full" borderRadius={99} {...props}>
        {children}
      </Button>
    </Link>
  );
}

function BaseButton({ children, ...props }) {
  return (
    <Button {...props} borderRadius={99} size={'lg'} w="full">
      {children}
    </Button>
  );
}

function ButtonComponent({ children, ...props }) {
  const Comp = props.href ? LinkButton : BaseButton;
  return (
    <Comp fontSize="xl" {...props}>
      {children}
    </Comp>
  );
}

export default ButtonComponent;
