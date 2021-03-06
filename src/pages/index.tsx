import React, { ReactElement, useState } from 'react';
import tw, { styled } from 'twin.macro';

interface Props {}

const Index: React.FC<Props> = (props: Props): ReactElement => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <div>
        <nav className='flex flex-wrap items-center justify-between p-6 bg-teal-500'>
          <div>item 1</div>
          <div className='flex'>
            <div>1</div>
            <div>2</div>
            <div>3</div>
          </div>
        </nav>
        <main>
          <div>Hello world</div>
        </main>
      </div>
    </>
  );
};

const Header = styled.h1`
  ${tw`border border-green-400 rounded-xl m-6 bg-yellow-400`}
`;

export default Index;
