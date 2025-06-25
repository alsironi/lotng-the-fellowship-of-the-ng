import { TestBed } from '@angular/core/testing';
import { QuestService } from './quest.service';

describe('QuestService', () => {
  let service: QuestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get quests', () => {
    const quests = service.getQuests();
    expect(quests.length).toBeGreaterThan(0);
  });

  it('should complete quest', () => {
    service.completeQuest('quest-1');
    const completed = service.getCompletedQuests();
    expect(completed.length).toBe(1);
  });
});
