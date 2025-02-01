/**
* Represents the base statistics for a character
*/
export interface BaseStats {
    /** Character's power level */
    power: number;
    /** Character's toughness/defense */
    toughness: number;
    /** Character's mobility/speed */
    mobility: number;
    /** Character's attack capability */
    attack: number;
    /** Character's support capability */
    support: number;
    /** Character's difficulty to master */
    difficulty: number;
}

/**
* Represents miscellaneous combat statistics
*/
export interface MiscStats {
    /** Character's primary role */
    role: string;
    /** Character's attack range */
    range: string;
    /** Character's damage type */
    damage: string;
    /** Character's combat type */
    type: string;
}

/**
* Represents a character in the application
* Contains basic information about a character including their identity,
* race, affiliations, and current status
*/
export interface Character {
/*** Faction */
faction: string;

/** Class */
class: string;

/** Base Stats */
baseStats: BaseStats;

/** Misc Stats */
miscStats: MiscStats;

/** Unique identifier for the character */
id: string;

/** Character's full name */
name: string;

/** Character's race (e.g., Human, Elf, Wizard) */
race: string;

/** Optional honorary or formal title */
title?: string;

/** Optional list of groups or organizations the character is affiliated with */
affiliations?: string[];

/** Optional list of weapons or arms the character possesses */
weapons?: string[];

/** Indicates if the character is currently alive */
isAlive: boolean;

/** Detailed description of the character */
description: string;
}

export const GANDALF_CHARACTER: Character = {
    id: "gandalf",
    name: "Gandalf the Grey",
    race: "Wizard",
    title: "The Grey Pilgrim",
    faction: "Guardians",
    class: "Mage",
    baseStats: {
        power: 8,
        toughness: 6,
        mobility: 5,
        attack: 7,
        support: 9,
        difficulty: 7
    },
    miscStats: {
        role: "Support",
        range: "Mixed",
        damage: "Magical",
        type: "Caster"
    },
    affiliations: ["The White Council", "Fellowship of the Ring"],
    weapons: ["Glamdring", "Narya", "Wizard Staff"],
    isAlive: true,
    description: "Gandalf is one of the five Istari sent to Middle-earth to combat the threat of Sauron. He is a wise and powerful wizard known for his fireworks, wisdom, and leadership in the fight against evil."
};
    
