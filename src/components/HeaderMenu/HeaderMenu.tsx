import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MenuItem } from "../../types/MenuItem";
import { HeaderMenuItem } from "../HeaderMenuItem/HeaderMenuItem";

import LogoImage from "../../assets/cart.png";

type HeaderMenuProps = {
    menuItems: MenuItem[];
};

export const HeaderMenu: React.FunctionComponent<HeaderMenuProps> = (props: HeaderMenuProps) => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navRef = useRef<HTMLDivElement>(null);
    const probeRef = useRef<HTMLDivElement>(null);

    // Re-measure whenever the nav resizes or items change
    useEffect(() => {
        const checkFit = () => {
            if (!navRef.current || !probeRef.current) return;
            // probeRef mirrors the full expanded layout — its scrollWidth is the minimum
            // width needed to show everything. Compare against the nav's available width.
            setIsCollapsed(probeRef.current.scrollWidth > navRef.current.clientWidth);
        };

        const observer = new ResizeObserver(checkFit);
        if (navRef.current) observer.observe(navRef.current);
        checkFit();
        return () => observer.disconnect();
    }, [props.menuItems]);

    // Close the dropdown when clicking outside the nav
    useEffect(() => {
        const handleOutside = (e: MouseEvent) => {
            if (navRef.current && !navRef.current.contains(e.target as Node)) {
                setIsMenuOpen(false);
            }
        };
        document.addEventListener("mousedown", handleOutside);
        return () => document.removeEventListener("mousedown", handleOutside);
    }, []);

    return (
        <nav ref={navRef} className="relative">
            {/*
             * Hidden probe — always rendered, never visible, never interactive.
             * Mirrors the full expanded nav layout so ResizeObserver can compare
             * its natural width against the available container width.
             * Adding/removing menu items in the future will automatically adjust
             * the collapse breakpoint without any manual threshold changes.
             */}
            <div
                ref={probeRef}
                className="absolute top-0 left-0 flex items-center pointer-events-none"
                style={{ visibility: "hidden", whiteSpace: "nowrap" }}
                aria-hidden="true"
            >
                <img className="h-8 w-auto" src={LogoImage} alt="" />
                <span className="px-3 py-2 text-m font-medium">want more info?</span>
                <div className="ml-6 flex space-x-4">
                    {props.menuItems.map((item) => (
                        <HeaderMenuItem key={item.id} item={item} />
                    ))}
                </div>
            </div>

            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    {/* Brand — text hides when collapsed, logo icon always shown */}
                    <div className="flex shrink-0 items-center">
                        <Link to="/">
                            <img className="h-8 w-auto" src={LogoImage} alt="Nintendo Card Image" />
                        </Link>
                        {!isCollapsed && (
                            <div className="px-3 py-2 text-m font-medium text-pink-600 cursor-default">
                                want more info?
                            </div>
                        )}
                    </div>

                    {/* Desktop: items inline */}
                    {!isCollapsed && (
                        <div className="flex space-x-4">
                            {props.menuItems.map((item) => (
                                <HeaderMenuItem key={item.id} item={item} />
                            ))}
                        </div>
                    )}

                    {/* Mobile: hamburger + dropdown */}
                    {isCollapsed && (
                        <div className="relative">
                            <button
                                onClick={() => setIsMenuOpen((o) => !o)}
                                className="rounded-md px-3 py-2 text-gray-400 hover:bg-gray-700 hover:text-white"
                                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                                aria-expanded={isMenuOpen}
                            >
                                <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} size="lg" />
                            </button>
                            {isMenuOpen && (
                                <div className="absolute right-0 top-full mt-1 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                                    <div className="py-1 flex flex-col">
                                        {props.menuItems.map((item) => (
                                            <div key={item.id} onClick={() => setIsMenuOpen(false)}>
                                                <HeaderMenuItem item={item} />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};
