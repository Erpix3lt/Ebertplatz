import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box } from '@react-three/drei';

const RotatingBox: React.FC = () => {
  const mesh = useRef<THREE.Mesh>(null!);

  useFrame(() => {
    if (mesh.current) mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
  });

  return (
    <Box ref={mesh}>
      <meshStandardMaterial attach="material" color="hotpink" />
    </Box>
  );
};

const ExampleComponent: React.FC = () => {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <RotatingBox />
    </Canvas>
  );
};

export default ExampleComponent;
