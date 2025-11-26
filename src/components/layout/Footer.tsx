import Link from "next/link";

export function Footer() {
    return (
        <footer className="py-16 px-[5%] bg-bg-main border-t border-accent-glow/10">
            <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-10 lg:gap-16">
                <div className="flex flex-col gap-4">
                    <h3 className="font-display text-[1.6rem] text-accent-glow tracking-[2px]">7point83</h3>
                    <p className="text-text-muted text-[0.95rem] leading-relaxed">
                        Reconnecting humanity with Earth's natural frequency.
                        <br />
                        Restoring balance through resonance.
                    </p>
                </div>

                <div className="flex flex-col gap-5">
                    <h4 className="text-[0.85rem] tracking-[2px] uppercase text-text-primary">Explore</h4>
                    <div className="flex flex-col gap-2">
                        <Link href="/" className="text-text-muted text-[0.9rem] hover:text-accent-glow transition-colors">Home</Link>
                        <Link href="/retreats" className="text-text-muted text-[0.9rem] hover:text-accent-glow transition-colors">Retreats</Link>
                        <Link href="/philosophy" className="text-text-muted text-[0.9rem] hover:text-accent-glow transition-colors">Philosophy</Link>
                    </div>
                </div>

                <div className="flex flex-col gap-5">
                    <h4 className="text-[0.85rem] tracking-[2px] uppercase text-text-primary">Legal</h4>
                    <div className="flex flex-col gap-2">
                        <Link href="#" className="text-text-muted text-[0.9rem] hover:text-accent-glow transition-colors">Privacy Policy</Link>
                        <Link href="#" className="text-text-muted text-[0.9rem] hover:text-accent-glow transition-colors">Terms of Service</Link>
                    </div>
                </div>

                <div className="flex flex-col gap-5">
                    <h4 className="text-[0.85rem] tracking-[2px] uppercase text-text-primary">Connect</h4>
                    <div className="flex flex-col gap-2">
                        <Link href="#" className="text-text-muted text-[0.9rem] hover:text-accent-glow transition-colors">Instagram</Link>
                        <Link href="#" className="text-text-muted text-[0.9rem] hover:text-accent-glow transition-colors">Twitter</Link>
                        <Link href="mailto:hello@7point83.club" className="text-text-muted text-[0.9rem] hover:text-accent-glow transition-colors">Contact Us</Link>
                    </div>
                </div>
            </div>

            <div className="max-w-[1200px] mx-auto mt-10 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-text-muted text-[0.85rem] gap-4">
                <p>&copy; {new Date().getFullYear()} 7point83 Club. All rights reserved.</p>
                <p>Designed with resonance.</p>
            </div>
        </footer>
    );
}
