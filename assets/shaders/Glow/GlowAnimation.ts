import { _decorator, Component, Sprite } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('GlowAnimation')
export class GlowAnimation extends Component {
    private glowDirection: number = 1; // 1 for growing, -1 for shrinking
    private currentGlowSize: number = 0.01; // Start with minimum glow size
    private minGlowSize: number = 0.0; // Minimum glow size
    private maxGlowSize: number = 0.4; // Maximum glow size
    private glowSpeed: number = 0.6; // Speed of the glow animation

    start() {
        // Set initial glowColorSize
        this.node.getComponent(Sprite)!.material.setProperty('glowThreshold', this.currentGlowSize);
    }

    update(deltaTime: number) {
        // Animate the glowColorSize over time
        this.currentGlowSize += this.glowSpeed * deltaTime * this.glowDirection;

        // Reverse the direction when reaching the max or min size
        if (this.currentGlowSize >= this.maxGlowSize) {
            this.glowDirection = -1; // Start shrinking the glow
        } else if (this.currentGlowSize <= this.minGlowSize) {
            this.glowDirection = 1; // Start growing the glow
        }

        // Apply the animated glowColorSize to the material
        this.node.getComponent(Sprite)!.material.setProperty('glowThreshold', this.currentGlowSize);
    }
}
