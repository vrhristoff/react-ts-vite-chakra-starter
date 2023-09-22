import { useState } from 'react';
import { Link, Icon, Heading, VStack, Button, Text, Image } from '@chakra-ui/react';
import ReactLogo from './icons/react.svg?react';

const App = () => {
    const [show, setShow] = useState(false);

    return (
        <VStack textAlign="center" p={4}>
            <Link href="https://react.dev/" isExternal>
                <Icon as={ReactLogo} boxSize={20} />
            </Link>

            <Heading as="h1">Vite Project</Heading>
            <Text color="gray.500">Stay tuned for more</Text>

            <Button my={2} onClick={() => setShow(true)} colorScheme="blue" isDisabled={show}>
                Show Cool Image
            </Button>

            {show && (
                <Image data-testid="image" borderRadius="md" src="https://picsum.photos/900/450" alt="Random Image" />
            )}
        </VStack>
    );
};

export default App;
