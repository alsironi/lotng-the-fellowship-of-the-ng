import { Injectable } from '@angular/core';

export interface Item {
  id: string;
  name: string;
  type: 'weapon' | 'armor' | 'consumable' | 'quest';
  rarity: 'common' | 'uncommon' | 'rare' | 'legendary';
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  private inventory: Item[] = [
    {
      id: 'sting',
      name: 'Sting',
      type: 'weapon',
      rarity: 'legendary',
      quantity: 1
    },
    {
      id: 'mithril',
      name: 'Mithril Shirt',
      type: 'armor',
      rarity: 'legendary',
      quantity: 1
    },
    {
      id: 'lembas',
      name: 'Lembas Bread',
      type: 'consumable',
      rarity: 'uncommon',
      quantity: 10
    }
  ];

  getInventory(): Item[] {
    return this.inventory;
  }

  addItem(item: Item): void {
    const existing = this.inventory.find(i => i.id === item.id);
    if (existing) {
      existing.quantity += item.quantity;
    } else {
      this.inventory.push(item);
    }
  }

  removeItem(id: string, quantity: number = 1): void {
    const item = this.inventory.find(i => i.id === id);
    if (item) {
      item.quantity -= quantity;
      if (item.quantity <= 0) {
        this.inventory = this.inventory.filter(i => i.id !== id);
      }
    }
  }

  getItemsByType(type: string): Item[] {
    return this.inventory.filter(i => i.type === type);
  }

  getTotalItems(): number {
    return this.inventory.reduce((sum, i) => sum + i.quantity, 0);
  }
}
