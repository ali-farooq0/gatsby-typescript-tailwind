import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import {
  Box,
  Container,
  Heading,
  IconButton,
  Link,
  SimpleGrid,
  Stack,
  useColorMode,
  useDisclosure,
  Text,
} from '@chakra-ui/react';
import React, { ReactElement, ReactNode } from 'react';
import tw, { styled } from 'twin.macro';

interface Props {}

const Index: React.FC<Props> = (props: Props): ReactElement => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <div className='flex w-full justify-center '>
      <div className='flex flex-col flex-1 max-w-5xl'>
        <nav className='flex items-center justify-between flex-wrap  p-6 w-full z-10'>
          <div className='flex items-center flex-shrink-0  '>
            <IconButton
              aria-label=''
              bg='transparent'
              icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              onClick={toggleColorMode}
            />
          </div>
          <div className='space-x-6'>
            <Link>About</Link>
            <Link>Projects</Link>
            <Link>Contact</Link>
          </div>
        </nav>

        <div className='mt-24 md:mt-18'>
          <div className='p-6'>
            <Stack direction={{ base: 'column', lg: 'row' }}>
              <Stack flex={1} justify={{ lg: 'center' }}>
                <Box>
                  <Text
                    fontFamily={'heading'}
                    fontWeight={700}
                    textTransform={'uppercase'}
                    mb={3}
                    fontSize={'xl'}
                    color={'gray.500'}
                  >
                    Technology
                  </Text>
                  <Heading mb={5} fontSize={{ base: '3xl', md: '5xl' }}>
                    21st century agriculture
                  </Heading>
                  <Text fontSize={'xl'}>
                    The NewLife™ technology allows you to monitor your crops and
                    get complete insights at real time. The proprietary
                    software/hardware ecosystem prevents your plants from
                    getting neglected.
                  </Text>
                </Box>

                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                  {stats.map((stat) => (
                    <Box key={stat.title}>
                      <Text
                        fontFamily={'heading'}
                        fontSize={{ base: '2xl', md: '3xl' }}
                        mb={3}
                      >
                        {stat.title}
                      </Text>
                      <Text fontSize={'xl'}>{stat.content}</Text>
                    </Box>
                  ))}
                </SimpleGrid>
              </Stack>
            </Stack>
          </div>
        </div>
      </div>
    </div>
  );
};
const StatsText = ({ children }: { children: ReactNode }) => (
  <Text as={'span'} fontWeight={700}>
    {children}
  </Text>
);

const stats = [
  {
    title: '10+',
    content: (
      <>
        <StatsText>Software modules</StatsText> for detailed monitoring and
        real-time analytics
      </>
    ),
  },
  {
    title: '24/7',
    content: (
      <>
        <StatsText>Analytics</StatsText> enabled right in your dashboard without
        history limitations
      </>
    ),
  },
  {
    title: '13%',
    content: (
      <>
        <StatsText>Farms</StatsText> in North America has chosen NewLife™ as
        their management solution
      </>
    ),
  },
  {
    title: '250M+',
    content: (
      <>
        <StatsText>Plants</StatsText> currently connected and monitored by the
        NewLife™ software
      </>
    ),
  },
];

const Header = styled.h1`
  ${tw`border border-green-400 rounded-xl m-6 bg-yellow-400`}
`;

export default Index;
