import { TestBed } from '@angular/core/testing';
import { InventoryService } from './inventory.service';

describe('InventoryService', () => {
  let service: InventoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InventoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get inventory', () => {
    const inventory = service.getInventory();
    expect(inventory.length).toBeGreaterThan(0);
  });

  it('should add item', () => {
    const initial = service.getTotalItems();
    service.addItem({ id: 'test', name: 'Test Item', type: 'weapon', rarity: 'common', quantity: 5 });
    expect(service.getTotalItems()).toBe(initial + 5);
  });
});
