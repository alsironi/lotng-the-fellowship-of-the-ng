import { Injectable } from '@angular/core';

export interface Quest {
  id: string;
  title: string;
  description: string;
  reward: number;
  completed: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class QuestService {
  private quests: Quest[] = [
    {
      id: 'quest-1',
      title: 'Destroy the Ring',
      description: 'Journey to Mount Doom and destroy the One Ring',
      reward: 1000,
      completed: false
    },
    {
      id: 'quest-2',
      title: 'Gather the Fellowship',
      description: 'Assemble a group of heroes to aid your quest',
      reward: 500,
      completed: false
    },
    {
      id: 'quest-3',
      title: 'Defend Minas Tirith',
      description: 'Protect the capital of Gondor from evil forces',
      reward: 750,
      completed: false
    }
  ];

  getQuests(): Quest[] {
    return this.quests;
  }

  getQuestById(id: string): Quest | undefined {
    return this.quests.find(q => q.id === id);
  }

  completeQuest(id: string): void {
    const quest = this.getQuestById(id);
    if (quest) {
      quest.completed = true;
    }
  }

  getCompletedQuests(): Quest[] {
    return this.quests.filter(q => q.completed);
  }

  getTotalReward(): number {
    return this.getCompletedQuests().reduce((sum, q) => sum + q.reward, 0);
  }
}
