'use client';

export default function MeshGradientBG() {
    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
            <div
                className="mesh-orb mesh-orb-cyan"
                style={{
                    top: '-10%',
                    left: '10%',
                    width: '600px',
                    height: '600px',
                    animationDuration: '25s',
                }}
            />
            <div
                className="mesh-orb mesh-orb-amber"
                style={{
                    bottom: '10%',
                    right: '5%',
                    width: '500px',
                    height: '500px',
                    animationDelay: '-8s',
                    animationDuration: '20s',
                }}
            />
            <div
                className="mesh-orb mesh-orb-cyan"
                style={{
                    top: '40%',
                    left: '50%',
                    width: '400px',
                    height: '400px',
                    animationDelay: '-15s',
                    animationDuration: '30s',
                    opacity: 0.5,
                }}
            />
        </div>
    );
}
