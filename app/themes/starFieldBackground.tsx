'use client';
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';

function generatePointsInSphere(numPoints: number, radius: number) {
    const positions = new Float32Array(numPoints * 3);

    for (let i = 0; i < numPoints; i++) {
        let x = Math.random() * 2 - 1;
        let y = Math.random() * 2 - 1;
        let z = Math.random() * 2 - 1;
        const mag = Math.sqrt(x * x + y * y + z * z);

        // Normalize and scale to fit within the sphere
        x = (x / mag) * radius;
        y = (y / mag) * radius;
        z = (z / mag) * radius;

        positions[i * 3] = x;
        positions[i * 3 + 1] = y;
        positions[i * 3 + 2] = z;
    }

    return positions;
}

function Stars(props: any) {
    const ref = useRef();
    const sphere = generatePointsInSphere(5000, 1.5);

    useFrame((state, delta) => {
        // Reduce the rotation speed by dividing by a larger number
        if (ref.current) {
            (ref.current as any).rotation.x -= delta / 50;
            (ref.current as any).rotation.y -= delta / 75;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
                <PointMaterial
                    transparent
                    color="#ffffff"
                    size={0.002}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    );
}

export default function StarfieldBackground() {
    return (
        <div className="fixed top-0 left-0 w-full h-full -z-10">
            <Canvas camera={{ position: [0, 0, 1] }}>
                <Stars />
            </Canvas>
        </div>
    );
}
