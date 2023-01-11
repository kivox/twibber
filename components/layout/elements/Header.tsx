import React from 'react';
import { Button, Code, Container, Flex, Header as HeaderMantine, Text } from '@mantine/core';

function Header() {
    return (
        <HeaderMantine height={64} p="sm">
            <Container size="xl" w="100%">
                <Flex align="center" justify="center" w="100%">
                    <Text
                      size="lg"
                      weight={800}
                      component="span"
                      variant="gradient"
                      gradient={{ from: 'blue', to: 'teal' }}
                    >
                        Twibber
                    </Text>
                    <Code ml={8} color="white">
                        0.0.1
                    </Code>

                    <Button ml="auto" variant="default">
                        Login
                    </Button>
                </Flex>
            </Container>
        </HeaderMantine>
    );
}

export default Header;
