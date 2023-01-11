import React, {useState} from 'react';
import {
    Anchor,
    Button,
    Checkbox,
    Code,
    Container,
    Flex,
    Group,
    Header as HeaderMantine,
    Modal,
    PasswordInput,
    Stack,
    Text,
    TextInput,
} from '@mantine/core';
import Link from 'next/link';
import {upperFirst, useToggle} from '@mantine/hooks';
import {useForm} from '@mantine/form';

function Header() {
    const [authModal, setAuthModal] = useState(false);

    const [type, toggle] = useToggle(['login', 'register']);
    const form = useForm({
        initialValues: {
            email: '',
            username: '',
            password: '',
            terms: true,
        },

        validate: {
            email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Email must be a valid email address'),
            password: (val) => (val.length <= 6 ? 'Password should include at least 6 characters' : null),
        },
    });

    return (
        <>
            <Modal
                title={
                    <Text size="xl" weight={500}>
                        {upperFirst(type)}
                    </Text>
                }
                onClose={() => {
                    setAuthModal(false);
                }}
                opened={authModal}
                centered
            >
                <form onSubmit={form.onSubmit(() => {
                })}
                >
                    <Stack>
                        {type === 'register' && (
                            <TextInput
                                label="Name"
                                placeholder="Your name"
                                value={form.values.name}
                                onChange={(event) => form.setFieldValue('name', event.currentTarget.value)}
                            />
                        )}

                        <TextInput
                            required
                            label="Email"
                            placeholder="hello@mantine.dev"
                            value={form.values.email}
                            onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
                            error={form.errors.email && 'Invalid email'}
                        />

                        <PasswordInput
                            required
                            label="Password"
                            placeholder="Your password"
                            value={form.values.password}
                            onChange={(event) => form.setFieldValue('password', event.currentTarget.value)}
                            error={form.errors.password && 'Password should include at least 6 characters'}
                        />

                        {type === 'register' && (
                            <Checkbox
                                label="I accept terms and conditions"
                                checked={form.values.terms}
                                onChange={(event) => form.setFieldValue('terms', event.currentTarget.checked)}
                            />
                        )}
                    </Stack>

                    <Group position="apart" mt="xl">
                        <Link href="/" legacyBehavior passHref>
                            <Anchor
                                component="button"
                                type="button"
                                color="dimmed"
                                onClick={() => toggle()}
                                size="xs"
                            >
                                {type === 'register'
                                    ? 'Already have an account? Login'
                                    : "Don't have an account? Register"}
                            </Anchor>
                        </Link>
                        <Button type="submit">{upperFirst(type)}</Button>
                    </Group>
                </form>
            </Modal>

            <HeaderMantine height={64}>
                <Container size="xl" w="100%" h="100%">
                    <Flex align="center" justify="center" h="100%" w="100%">
                        <Link href="/">
                            <>
                                <Text
                                    size="lg"
                                    weight={800}
                                    component="span"
                                    variant="gradient"
                                    gradient={{from: 'blue', to: 'teal'}}
                                >
                                    twibber
                                </Text>
                                <Code ml={8} color="gray">
                                    0.0.1
                                </Code>
                            </>
                        </Link>

                        <Button
                            ml="auto"
                            variant="default"
                            onClick={() => {
                                setAuthModal(true);
                            }}
                        >
                            Login
                        </Button>
                    </Flex>
                </Container>
            </HeaderMantine>
        </>
    );
}

export default Header;
