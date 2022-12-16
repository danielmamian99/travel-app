export interface Activity {
    type: string;
    icon?: string;
    labels: string[];
    name?: string;
    subtitle?: string;
} 

export interface Itinerary {
    day: number;
    activitys: Activity[];
}