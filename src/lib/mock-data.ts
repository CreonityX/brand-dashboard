
import {
    User, Shield, CreditCard, Bell, Lock, Workflow, LifeBuoy, AlertTriangle, Monitor, Banknote, GraduationCap, BookOpen,
    Settings, HelpCircle, Check, Briefcase, MessageSquare, Wallet, FileText, TrendingUp, Users, Video, Image, LogOut,
    Plus, Minus, ChevronDown, ChevronRight, Search, Menu, X, LayoutDashboard, Calendar, Activity, LayoutList,
    ArrowLeftRight, Landmark, Wrench, Newspaper, PlayCircle, Lightbulb, CalendarIcon, ClipboardList, Eye, Edit3, ShieldCheck,
    Send, Zap, CheckCircle, Bookmark, Mail, Building2, FolderOpen, Star, BarChart3, GitCompare, PieChart, ClipboardCheck
} from "lucide-react";

// Dashboard Overview (Brand)
export const DASHBOARD_ACTIVITY = [
    { id: 1, type: 'application', text: 'Tech_Nomad applied to S26 Launch Campaign', time: '2h ago' },
    { id: 2, type: 'content', text: 'Sarah_Vfx submitted draft for S26 Launch', time: '4h ago' },
    { id: 3, type: 'payment', text: 'Payment processed to Pixel_Artisan', time: 'Yesterday' },
    { id: 4, type: 'campaign', text: 'S26 Launch Campaign launched', time: 'Feb 15' },
];
export const DASHBOARD_ALERTS = [
    { id: 1, type: 'content', text: '3 pending content approvals', severity: 'medium', href: '/content-review' },
    { id: 2, type: 'budget', text: 'S26 Launch budget at 92%', severity: 'high', href: '/finance' },
    { id: 3, type: 'payment', text: 'Payment due to Tech_Nomad Feb 20', severity: 'medium', href: '/finance' },
    { id: 4, type: 'campaign', text: 'S26 Launch ending Mar 31', severity: 'low', href: '/campaigns/c1' },
];
export const DASHBOARD_UPCOMING_DEADLINES = [
    { id: 1, creator: 'Tech_Nomad', campaign: 'S26 Launch', dueDate: 'Feb 20', type: 'draft' },
    { id: 2, creator: 'Pixel_Artisan', campaign: 'Spring Ad Set', dueDate: 'Feb 25', type: 'revision' },
];

export const MOCK_CONVERSATIONS = [
    { id: '1', brand: 'Samsung', message: 'Hey, wanted to check on the progress for the S26 review...', time: '10:42 AM', unreadCount: 2, isOnline: true },
    { id: '2', brand: 'Nike', message: 'Contracts are signed! When can we schedule kickoff?', time: 'Yesterday', unreadCount: 0, isOnline: false },
    { id: '3', brand: 'Creonity Support', message: 'Your payment for #7829 has been processed.', time: 'Feb 12', unreadCount: 0, isOnline: true, isSupport: true },
    { id: '4', brand: 'Adidas', message: 'Do you have the raw footage for the reel?', time: 'Feb 10', unreadCount: 1, isOnline: false },
    { id: '5', brand: 'Sony', message: 'Thanks for the quick turnaround!', time: 'Feb 08', unreadCount: 0, isOnline: false },
    { id: '6', brand: 'Canon', message: 'Let\'s discuss the budget for Q2.', time: 'Feb 05', unreadCount: 0, isOnline: true },
];

// Brand dashboard: conversations with creators
export const MOCK_BRAND_CONVERSATIONS = [
    { id: '1', creator: 'Sarah_Vfx', creatorNiche: '3D Motion', campaign: 'S26 Low-Light Review', campaignId: 'c1', message: 'I\'ve uploaded the first cut for review. Let me know your thoughts!', time: '10:42 AM', unreadCount: 2, isOnline: true },
    { id: '2', creator: 'Tech_Nomad', creatorNiche: 'Tech Reviews', campaign: 'S26 Launch Campaign', campaignId: 'c1', message: 'Contracts signed! When can we schedule the kickoff call?', time: 'Yesterday', unreadCount: 0, isOnline: false },
    { id: '3', creator: 'Creonity Support', creatorNiche: '', campaign: null, campaignId: null, message: 'Your payment for campaign #7829 has been processed.', time: 'Feb 12', unreadCount: 0, isOnline: true, isSupport: true },
    { id: '4', creator: 'Pixel_Artisan', creatorNiche: 'Digital Art', campaign: 'Spring Ad Set', campaignId: 'c2', message: 'Do you have the brand guidelines PDF? Need it for the assets.', time: 'Feb 10', unreadCount: 1, isOnline: false },
    { id: '5', creator: 'Audio_Wizard', creatorNiche: 'Sound Design', campaign: 'S26 Audio Promo', campaignId: 'c1', message: 'Thanks for the feedback! Revised mix attached.', time: 'Feb 08', unreadCount: 0, isOnline: false },
    { id: '6', creator: 'Tech_Nomad', creatorNiche: 'Tech Reviews', campaign: 'Q2 Budget Discussion', campaignId: null, message: 'Let\'s discuss the budget for the next collaboration.', time: 'Feb 05', unreadCount: 0, isOnline: true },
];

// Campaigns for filter dropdown
export const MOCK_CAMPAIGNS = [
    { id: 'c1', name: 'S26 Launch Campaign' },
    { id: 'c2', name: 'Spring Ad Set' },
    { id: 'c3', name: 'S26 Audio Promo' },
];

// Message templates for brand-creator communication
export const MESSAGE_TEMPLATES = [
    { id: 'invitation', label: 'Campaign Invitation', text: 'Hi! We\'d love to invite you to collaborate on our upcoming campaign. Your work aligns perfectly with our brand vision. Would you be available for a quick call to discuss details?' },
    { id: 'acceptance', label: 'Acceptance Confirmation', text: 'Excellent news! We\'re thrilled you\'ve accepted. I\'ll send over the creative brief and contract within 24 hours. Welcome to the team!' },
    { id: 'revision', label: 'Revision Request', text: 'Thanks for the first cut! We have a few minor revisions: [add specific feedback]. Could you have the updated version back by [date]? Let me know if you have any questions.' },
    { id: 'payment', label: 'Payment Confirmation', text: 'Your payment of [amount] for [campaign name] has been processed. You should see it in your account within 3-5 business days. Thank you for your collaboration!' },
    { id: 'thank-you', label: 'Thank You Message', text: 'Thank you so much for your incredible work on this campaign. The final deliverable exceeded our expectations. We look forward to collaborating again!' },
];

export const INSIGHTS_TABS = [
    { id: 'industry', label: 'Industry Trends', icon: TrendingUp },
    { id: 'marketplace', label: 'Creator Marketplace', icon: BarChart3 },
    { id: 'competitive', label: 'Competitive Intelligence', icon: GitCompare },
    { id: 'seasonal', label: 'Seasonal Planning', icon: CalendarIcon },
];

export const INSIGHTS_INDUSTRY = [
    { id: 1, title: 'Short-form video dominance', trend: 'up', summary: 'TikTok and Reels drive 3x engagement vs static posts in tech vertical.', source: 'Creonity Research' },
    { id: 2, title: 'Authenticity over polish', trend: 'up', summary: 'Raw, behind-the-scenes content outperforming highly produced ads.', source: 'Q1 2026' },
    { id: 3, title: 'BeReal-style moments', trend: 'emerging', summary: 'Candid product integration gaining traction among Gen Z.', source: 'Platform Data' },
];

export const INSIGHTS_MARKETPLACE = [
    { niche: 'Tech Reviews', avgRate: 3500, availability: 'High', growth: '+12%' },
    { niche: 'Lifestyle', avgRate: 2800, availability: 'Medium', growth: '+8%' },
    { niche: 'Beauty', avgRate: 2200, availability: 'High', growth: '+15%' },
];

export const INSIGHTS_COMPETITIVE = [
    { brand: 'Samsung', campaign: 'S24 Unpacked', tactic: 'Multi-creator launch event', result: '2.1M reach' },
    { brand: 'Apple', campaign: 'iPhone 16', tactic: 'Macro + micro mix', result: '4.5M impressions' },
];

export const INSIGHTS_SEASONAL = [
    { event: 'Valentine\'s Day', date: 'Feb 14', tip: 'Gift guides, unboxing', bestLaunch: 'Jan 25–30' },
    { event: 'Spring Launch', date: 'Mar 1', tip: 'Fresh starts, seasonal themes', bestLaunch: 'Feb 15–25' },
    { event: 'Mother\'s Day', date: 'May 11', tip: 'Family, gratitude content', bestLaunch: 'Apr 20–28' },
];

export const SETTINGS_TABS = [
    { id: 'account', label: 'Company Info', icon: User },
    { id: 'team', label: 'Team Management', icon: Users },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'payment', label: 'Payment Settings', icon: CreditCard },
    { id: 'billing', label: 'Billing & Subscription', icon: FileText },
    { id: 'integrations', label: 'Integrations', icon: Workflow },
    { id: 'privacy', label: 'Privacy & Security', icon: Shield },
    { id: 'preferences', label: 'Preferences', icon: Monitor },
    { id: 'blocked', label: 'Blocked Creators', icon: AlertTriangle, variant: 'danger' },
];

export const RESOURCE_TABS = [
    { id: 'courses', label: 'Courses & Tutorials', icon: GraduationCap },
    { id: 'best-practices', label: 'Best Practices', icon: BookOpen },
    { id: 'tools', label: 'Templates & Tools', icon: Wrench },
    { id: 'community', label: 'Creator Community', icon: Users },
    { id: 'insights', label: 'Market Insights', icon: TrendingUp },
    { id: 'news', label: 'Blog & News', icon: Newspaper },
];

export const SUPPORT_TABS = [
    { id: 'help-center', label: 'Help Center', icon: Search },
    { id: 'contact', label: 'Contact Support', icon: MessageSquare },
    { id: 'tickets', label: 'Submit Ticket', icon: LifeBuoy },
    { id: 'live-chat', label: 'Live Chat', icon: MessageSquare },
    { id: 'faqs', label: 'FAQs', icon: HelpCircle },
    { id: 'tutorials', label: 'Video Tutorials', icon: PlayCircle },
    { id: 'status', label: 'Platform Status', icon: Activity },
    { id: 'features', label: 'Feature Requests', icon: Lightbulb },
];

export const CALENDAR_VIEWS = [
    { id: 'month', label: 'Month', icon: CalendarIcon },
    { id: 'week', label: 'Week', icon: LayoutList },
    { id: 'day', label: 'Day', icon: CalendarIcon },
    { id: 'agenda', label: 'Agenda', icon: ClipboardList },
];

export const PROFILE_TABS = [
    { id: 'edit', label: 'Company Profile', icon: Building2 },
    { id: 'verification', label: 'Verification', icon: ShieldCheck },
    { id: 'showcase', label: 'Past Campaigns', icon: Briefcase },
    { id: 'assets', label: 'Brand Assets', icon: FolderOpen },
    { id: 'reviews', label: 'Reviews', icon: Star },
    { id: 'privacy', label: 'Privacy', icon: Lock },
];

export const ANALYTICS_TABS = [
    { id: 'overview', label: 'Overview', icon: Activity },
    { id: 'campaigns', label: 'Campaign Analytics', icon: TrendingUp },
    { id: 'creators', label: 'Creator Performance', icon: Users },
    { id: 'content', label: 'Content Performance', icon: LayoutList },
    { id: 'audience', label: 'Audience Insights', icon: Users },
    { id: 'comparison', label: 'Cross-Campaign', icon: GitCompare },
    { id: 'platform', label: 'Platform Analytics', icon: Monitor },
    { id: 'roi', label: 'ROI & Attribution', icon: PieChart },
    { id: 'benchmarking', label: 'Benchmarking', icon: BarChart3 },
    { id: 'reports', label: 'Reports', icon: FileText },
];

// Analytics mock data
export const ANALYTICS_OVERVIEW_KPIS = {
    totalReach: { value: "4.2M", change: "+18.2%", trend: "up" },
    totalImpressions: { value: "12.8M", change: "+24.1%", trend: "up" },
    totalEngagements: { value: "845K", change: "+8.5%", trend: "up" },
    totalConversions: { value: "2,340", change: "+12.3%", trend: "up" },
    totalSpend: { value: "$48,500", change: "-2.1%", trend: "down" },
    overallROI: { value: "385%", change: "+15%", trend: "up" },
    avgEngagementRate: { value: "4.8%", change: "-0.3%", trend: "down" },
    avgCostPerEngagement: { value: "$0.057", change: "-5.2%", trend: "up" },
};

export const ANALYTICS_CAMPAIGNS = [
    { id: 'c1', name: 'S26 Launch Campaign', reach: '2.1M', impressions: '6.4M', engagements: '420K', conversions: 890, spend: 18500, roi: 450, goalReach: 2000000, goalConversions: 800, status: 'Active' },
    { id: 'c2', name: 'Spring Ad Set', reach: '1.2M', impressions: '3.8M', engagements: '180K', conversions: 420, spend: 12000, roi: 320, goalReach: 1000000, goalConversions: 350, status: 'Completed' },
    { id: 'c3', name: 'S26 Audio Promo', reach: '900K', impressions: '2.6M', engagements: '245K', conversions: 1030, spend: 18000, roi: 580, goalReach: 800000, goalConversions: 900, status: 'Completed' },
];

export const ANALYTICS_CREATORS = [
    { id: '1', name: 'Tech_Nomad', reach: '1.8M', engagement: 6.2, roi: 520, conversions: 445, spend: 8500 },
    { id: '2', name: 'Sarah_Vfx', reach: '1.2M', engagement: 5.8, roi: 480, conversions: 320, spend: 6500 },
    { id: '3', name: 'Pixel_Artisan', reach: '450K', engagement: 4.1, roi: 210, conversions: 95, spend: 4200 },
    { id: '4', name: 'Audio_Wizard', reach: '650K', engagement: 7.2, roi: 380, conversions: 180, spend: 4800 },
];

export const ANALYTICS_PLATFORMS = [
    { id: 'instagram', name: 'Instagram', roi: 420, engagement: 4.2, spend: 18000 },
    { id: 'youtube', name: 'YouTube', roi: 520, engagement: 5.8, spend: 22000 },
    { id: 'tiktok', name: 'TikTok', roi: 310, engagement: 8.1, spend: 8500 },
];

export const FINANCE_TABS = [
    { id: 'overview', label: 'Budget Overview', icon: LayoutDashboard },
    { id: 'payments', label: 'Payment Queue', icon: CreditCard },
    { id: 'history', label: 'Payment History', icon: ArrowLeftRight },
    { id: 'invoices', label: 'Invoices & Receipts', icon: FileText },
    { id: 'alerts', label: 'Budget Alerts', icon: Bell },
    { id: 'reports', label: 'Financial Reports', icon: BarChart3 },
    { id: 'tax', label: 'Tax Center', icon: Landmark },
    { id: 'referrals', label: 'Referrals', icon: Users },
];

// Budget & Payments mock data
export const BUDGET_OVERVIEW = {
    totalMarketingBudget: 200000,
    period: 'annual', // or 'quarterly'
    allocatedToInfluencer: 85000,
    spentYTD: 48500,
    remaining: 36500,
    projectedEndOfPeriod: 82000,
};

export const BUDGET_BY_CAMPAIGN = [
    { campaign: 'S26 Launch', amount: 18500, pct: 38 },
    { campaign: 'Spring Ad Set', amount: 12000, pct: 25 },
    { campaign: 'S26 Audio Promo', amount: 18000, pct: 37 },
];

export const BUDGET_BY_PLATFORM = [
    { platform: 'Instagram', amount: 18000, pct: 37 },
    { platform: 'YouTube', amount: 22000, pct: 45 },
    { platform: 'TikTok', amount: 8500, pct: 18 },
];

export const BUDGET_BY_TIER = [
    { tier: 'Micro (<50K)', amount: 12000, pct: 25 },
    { tier: 'Mid (50-500K)', amount: 25000, pct: 52 },
    { tier: 'Macro (500K+)', amount: 11500, pct: 23 },
];

export const BUDGET_BY_MONTH = [
    { month: 'Jan', amount: 8200 }, { month: 'Feb', amount: 12500 },
    { month: 'Mar', amount: 9800 }, { month: 'Apr', amount: 18000 },
];

export const BUDGET_BY_CONTENT = [
    { type: 'Video', amount: 32000, pct: 66 },
    { type: 'Posts', amount: 12000, pct: 25 },
    { type: 'Stories', amount: 4500, pct: 9 },
];

export const PENDING_PAYMENTS = [
    { id: 'p1', creator: 'Tech_Nomad', campaign: 'S26 Launch', amount: 8500, dueDate: 'Feb 20', milestones: '3/3' },
    { id: 'p2', creator: 'Sarah_Vfx', campaign: 'S26 Launch', amount: 6500, dueDate: 'Feb 22', milestones: '2/3' },
    { id: 'p3', creator: 'Pixel_Artisan', campaign: 'Spring Ad Set', amount: 4200, dueDate: 'Feb 25', milestones: '3/3' },
];

export const SCHEDULED_PAYMENTS = [
    { id: 's1', creator: 'Audio_Wizard', campaign: 'S26 Audio', amount: 4800, scheduledDate: 'Mar 01' },
    { id: 's2', creator: 'Tech_Nomad', campaign: 'Q2 Budget', amount: 5200, scheduledDate: 'Mar 15' },
];

export const PAYMENT_HISTORY = [
    { id: 'TX-8821', date: 'Feb 12', creator: 'Sarah_Vfx', campaign: 'S26 Launch', amount: 6500, method: 'Bank Transfer', status: 'completed' },
    { id: 'TX-8820', date: 'Feb 10', creator: 'Tech_Nomad', campaign: 'S26 Launch', amount: 4200, method: 'PayPal', status: 'completed' },
    { id: 'TX-8819', date: 'Feb 08', creator: 'Pixel_Artisan', campaign: 'Spring Ad Set', amount: 3500, method: 'Bank Transfer', status: 'completed' },
    { id: 'TX-8818', date: 'Feb 05', creator: 'Audio_Wizard', campaign: 'S26 Audio', amount: 2400, method: 'Bank Transfer', status: 'failed' },
];

export const BUDGET_ALERTS = [
    { campaign: 'S26 Launch', cap: 20000, spent: 18500, pctUsed: 92, alertAt: 80 },
    { campaign: 'Spring Ad Set', cap: 15000, spent: 12000, pctUsed: 80, alertAt: 80 },
];

// Campaigns
export const CAMPAIGNS_TABS = [
    { id: 'list', label: 'Campaign List', icon: LayoutList },
    { id: 'templates', label: 'Templates', icon: Bookmark },
];

export const CAMPAIGNS_LIST = [
    { id: 'c1', name: 'S26 Launch Campaign', status: 'active', startDate: '2026-02-01', endDate: '2026-03-31', budget: 20000, spent: 18500, creatorsCount: 3, impressions: '6.4M', reach: '2.1M', engagement: '420K', objective: 'product_launch', platform: 'YouTube', thumbnail: null },
    { id: 'c2', name: 'Spring Ad Set', status: 'completed', startDate: '2026-01-10', endDate: '2026-02-15', budget: 15000, spent: 12000, creatorsCount: 2, impressions: '3.8M', reach: '1.2M', engagement: '180K', objective: 'awareness', platform: 'Instagram', thumbnail: null },
    { id: 'c3', name: 'S26 Audio Promo', status: 'active', startDate: '2026-02-05', endDate: '2026-03-15', budget: 18000, spent: 4800, creatorsCount: 1, impressions: '2.6M', reach: '900K', engagement: '245K', objective: 'engagement', platform: 'YouTube', thumbnail: null },
    { id: 'c4', name: 'Q2 Seasonal Push', status: 'draft', startDate: '2026-04-01', endDate: '2026-06-30', budget: 25000, spent: 0, creatorsCount: 0, impressions: '0', reach: '0', engagement: '0', objective: 'conversions', platform: 'Instagram', thumbnail: null },
];

export const CAMPAIGN_CREATORS = [
    { id: 'cc1', creatorId: 'cr1', creator: 'Tech_Nomad', campaignId: 'c1', status: 'working', views: '45K', engagement: 6.2, paymentStatus: '2/3 paid', amount: 4500 },
    { id: 'cc2', creatorId: 'cr2', creator: 'Sarah_Vfx', campaignId: 'c1', status: 'working', views: '12K', engagement: 5.8, paymentStatus: '3/3 paid', amount: 3200 },
    { id: 'cc3', creatorId: 'cr4', creator: 'Audio_Wizard', campaignId: 'c3', status: 'working', views: '8K', engagement: 7.2, paymentStatus: '1/2 paid', amount: 2800 },
    { id: 'cc4', creatorId: 'cr3', creator: 'Pixel_Artisan', campaignId: 'c2', status: 'completed', views: '22K', engagement: 4.1, paymentStatus: 'Paid', amount: 1800 },
];

export const CAMPAIGN_TEMPLATES = [
    { id: 't1', name: 'Product Launch', objective: 'product_launch', description: 'Standard template for new product launches' },
    { id: 't2', name: 'Seasonal Campaign', objective: 'awareness', description: 'Holiday and seasonal campaigns' },
    { id: 't3', name: 'Conversion Drive', objective: 'conversions', description: 'Sales and conversion-focused' },
];

export const CAMPAIGN_DETAIL_TABS = [
    { id: 'overview', label: 'Overview', icon: LayoutDashboard },
    { id: 'performance', label: 'Performance', icon: TrendingUp },
    { id: 'creators', label: 'Creators', icon: Users },
    { id: 'applications', label: 'Applications', icon: ClipboardList },
    { id: 'content', label: 'Content', icon: LayoutList },
    { id: 'budget', label: 'Budget', icon: Wallet },
    { id: 'files', label: 'Files', icon: FolderOpen },
    { id: 'activity', label: 'Activity Log', icon: Activity },
];

export const CONTENT_REVIEW_TABS = [
    { id: 'queue', label: 'Pending Queue', icon: ClipboardList },
    { id: 'approved', label: 'Approved', icon: CheckCircle },
    { id: 'revisions', label: 'Revision Requests', icon: Send },
    { id: 'rejected', label: 'Rejected Archive', icon: AlertTriangle },
];

export const PENDING_CONTENT = [
    { id: 'cr1', creator: 'Tech_Nomad', campaign: 'S26 Launch Campaign', submitted: '2026-02-15', deadline: '2026-02-20', type: 'video', platform: 'YouTube', caption: 'Check out the S26 in low-light mode! 🔥', hashtags: '#S26 #TechReview #LowLight', versions: ['v1'] },
    { id: 'cr2', creator: 'Sarah_Vfx', campaign: 'S26 Launch Campaign', submitted: '2026-02-14', deadline: '2026-02-22', type: 'image', platform: 'Instagram', caption: 'Visual breakdown of the camera sensors.', hashtags: '#3DMotion #S26', versions: ['v1', 'v2'] },
    { id: 'cr3', creator: 'Pixel_Artisan', campaign: 'Spring Ad Set', submitted: '2026-02-13', deadline: '2026-02-25', type: 'carousel', platform: 'Instagram', caption: 'Swipe through our spring collection.', hashtags: '#SpringAd #DigitalArt', versions: ['v1'] },
];

export const CAMPAIGN_BRIEF = {
    requirements: ['Logo visible in first 3 seconds', 'Mention product name at least 2x', 'Include CTA in caption', 'Use brand colors (green #a3e635)', '15-60 sec for video'],
    met: [true, true, true, false, true],
    guidelinesRef: 'Brand_Guidelines_2026.pdf',
};

export const APPROVED_CONTENT = [
    { id: 'ac1', creator: 'Tech_Nomad', campaign: 'S26 Launch', approvedDate: '2026-02-10', usageRights: '1 year, worldwide', scheduled: '2026-02-28', views: '45K' },
    { id: 'ac2', creator: 'Sarah_Vfx', campaign: 'S26 Launch', approvedDate: '2026-02-08', usageRights: '6 months', scheduled: null, views: '12K' },
];

export const REVISION_REQUESTS = [
    { id: 'rr1', creator: 'Tech_Nomad', campaign: 'S26 Launch', requested: '2026-02-12', dueDate: '2026-02-18', feedback: 'Color grading too warm—match brand cool tones', status: 'pending' },
    { id: 'rr2', creator: 'Pixel_Artisan', campaign: 'Spring Ad Set', requested: '2026-02-14', dueDate: '2026-02-21', feedback: 'Logo size increase 20%', status: 'pending' },
];

export const REJECTED_CONTENT = [
    { id: 'rx1', creator: 'Audio_Wizard', campaign: 'S26 Audio', date: '2026-02-05', reason: 'Audio quality below spec—background noise', paymentImpact: 'Partial refund processed' },
];

export const APPLICATIONS_TABS = [
    { id: 'pending', label: 'Pending Review', icon: ClipboardList },
    { id: 'shortlisted', label: 'Shortlisted', icon: Star },
    { id: 'accepted', label: 'Accepted', icon: CheckCircle },
    { id: 'rejected', label: 'Rejected', icon: AlertTriangle },
    { id: 'archive', label: 'All Archive', icon: FileText },
];

export const PENDING_APPLICATIONS = [
    { id: 'ap1', creator: 'Tech_Nomad', niche: 'Tech Reviews', followers: '850K', engagement: 6.2, platforms: ['YouTube', 'Instagram'], matchScore: 94, appliedDate: '2026-02-15', campaign: 'S26 Launch Campaign', proposal: 'I\'ve reviewed 50+ smartphones and specialize in low-light camera comparisons. My audience expects detailed, honest reviews—perfect fit for S26.', rate: 4500, availability: 'Within 2 weeks', pastWork: ['Samsung S24 Review (2M views)', 'iPhone 15 Pro Max Low-Light Test'] },
    { id: 'ap2', creator: 'Sarah_Vfx', niche: '3D Motion', followers: '125K', engagement: 5.8, platforms: ['Instagram', 'TikTok'], matchScore: 88, appliedDate: '2026-02-14', campaign: 'S26 Launch Campaign', proposal: 'Visual storyteller with motion design focus. I can create cinematic product showcases that highlight camera capabilities.', rate: 3200, availability: 'Immediate', pastWork: ['Sony A7 Cinematic Reel', 'GoPro Hero 12 Ad'] },
    { id: 'ap3', creator: 'Pixel_Artisan', niche: 'Digital Art', followers: '42K', engagement: 4.1, platforms: ['Instagram'], matchScore: 72, appliedDate: '2026-02-13', campaign: 'Spring Ad Set', proposal: 'Digital artist with brand campaign experience. I create scroll-stopping carousels and reels.', rate: 1800, availability: '3 weeks', pastWork: ['Spring 2025 Collab', 'Brand Carousel Series'] },
];

export const SHORTLISTED_APPLICATIONS = [
    { id: 'ap1', creator: 'Tech_Nomad', niche: 'Tech Reviews', followers: '850K', engagement: 6.2, matchScore: 94, campaign: 'S26 Launch Campaign', rate: 4500, appliedDate: '2026-02-15' },
];

export const ACCEPTED_APPLICATIONS = [
    { id: 'acc1', creator: 'Tech_Nomad', campaign: 'S26 Launch Campaign', status: 'awaiting_signature', appliedDate: '2026-02-10' },
];

export const REJECTED_APPLICATIONS = [
    { id: 'rej1', creator: 'Creator_X', campaign: 'S26 Launch Campaign', rejectedDate: '2026-02-08', reason: 'Audience demographic mismatch' },
];

// Creators / Talent
export const CREATORS_TABS = [
    { id: 'discover', label: 'Discover Creators', icon: Search },
    { id: 'saved', label: 'Saved Creators', icon: Bookmark },
    { id: 'working', label: 'Working With', icon: Zap },
    { id: 'past', label: 'Past Collaborations', icon: CheckCircle },
];

export const DISCOVER_CREATORS = [
    { id: 'cr1', name: 'Tech_Nomad', username: '@technomad', niche: 'Tech Reviews', verified: true, location: 'San Francisco, US', languages: ['English'], platforms: [{ name: 'YouTube', followers: '850K', engagement: 6.2 }, { name: 'Instagram', followers: '420K', engagement: 4.8 }], totalReach: '1.2M', rate: 4500, ratePublic: true, rating: 4.9, gigsCompleted: 47, joinedDate: '2024-01-15', availableNow: true, acceptingGigs: true, bio: 'Tech reviewer with 50+ smartphone reviews. Specializing in camera comparisons and honest, detailed analysis.', tags: ['Tech', 'Smartphones', 'Reviews'], growthRate: 12 },
    { id: 'cr2', name: 'Sarah_Vfx', username: '@sarahvfx', niche: '3D Motion', verified: true, location: 'London, UK', languages: ['English', 'Spanish'], platforms: [{ name: 'Instagram', followers: '125K', engagement: 5.8 }, { name: 'TikTok', followers: '89K', engagement: 8.2 }], totalReach: '214K', rate: 3200, ratePublic: true, rating: 4.8, gigsCompleted: 23, joinedDate: '2024-06-20', availableNow: true, acceptingGigs: true, bio: 'Visual storyteller & motion designer. Cinematic product showcases that stop the scroll.', tags: ['3D', 'Motion', 'Cinematic'], growthRate: 18 },
    { id: 'cr3', name: 'Pixel_Artisan', username: '@pixelartisan', niche: 'Digital Art', verified: false, location: 'Berlin, DE', languages: ['German', 'English'], platforms: [{ name: 'Instagram', followers: '42K', engagement: 4.1 }], totalReach: '42K', rate: 1800, ratePublic: true, rating: 4.6, gigsCompleted: 12, joinedDate: '2025-01-10', availableNow: false, acceptingGigs: true, bio: 'Digital artist with brand campaign experience. Scroll-stopping carousels and reels.', tags: ['Digital Art', 'Carousel', 'Brand'], growthRate: 8 },
    { id: 'cr4', name: 'Audio_Wizard', username: '@audiowizard', niche: 'Sound Design', verified: true, location: 'Los Angeles, US', languages: ['English'], platforms: [{ name: 'YouTube', followers: '220K', engagement: 5.2 }, { name: 'Instagram', followers: '95K', engagement: 4.5 }], totalReach: '315K', rate: 2800, ratePublic: false, rating: 4.9, gigsCompleted: 31, joinedDate: '2023-11-05', availableNow: true, acceptingGigs: true, bio: 'Award-winning sound designer. Audio that makes your brand memorable.', tags: ['Sound', 'Audio', 'Music'], growthRate: 15 },
    { id: 'cr5', name: 'Lifestyle_Lena', username: '@lifestyle_lena', niche: 'Lifestyle', verified: true, location: 'Miami, US', languages: ['English', 'Spanish'], platforms: [{ name: 'Instagram', followers: '310K', engagement: 6.1 }, { name: 'TikTok', followers: '180K', engagement: 7.8 }], totalReach: '490K', rate: 3500, ratePublic: true, rating: 4.7, gigsCompleted: 19, joinedDate: '2024-03-12', availableNow: false, acceptingGigs: true, bio: 'Lifestyle content creator. Beauty, wellness, and travel partnerships.', tags: ['Lifestyle', 'Beauty', 'Travel'], growthRate: 22 },
    { id: 'cr6', name: 'Foodie_Frank', username: '@foodiefrank', niche: 'Food & Cooking', verified: false, location: 'Toronto, CA', languages: ['English', 'French'], platforms: [{ name: 'YouTube', followers: '156K', engagement: 7.2 }, { name: 'Instagram', followers: '78K', engagement: 5.4 }], totalReach: '234K', rate: 2100, ratePublic: true, rating: 4.5, gigsCompleted: 8, joinedDate: '2025-02-01', availableNow: true, acceptingGigs: true, bio: 'Food content creator. Recipe collaborations and restaurant reviews.', tags: ['Food', 'Cooking', 'Recipes'], growthRate: 35 },
];

export const NICHE_CATEGORIES = ['Tech Reviews', '3D Motion', 'Digital Art', 'Sound Design', 'Lifestyle', 'Food & Cooking', 'Beauty', 'Fitness', 'Gaming', 'Travel'];
export const CREATOR_PLATFORMS = ['YouTube', 'Instagram', 'TikTok', 'Twitter/X', 'LinkedIn'];

export const SAVED_CREATORS_LISTS = [
    { id: 'list1', label: 'Beauty Influencers', creatorIds: ['cr5'], count: 1 },
    { id: 'list2', label: 'Tech Reviewers', creatorIds: ['cr1', 'cr2'], count: 2 },
];

export const SAVED_CREATORS = ['cr1', 'cr2', 'cr5']; // Bookmarked creator IDs

export const WORKING_WITH_COLLABORATIONS = [
    { id: 'w1', creatorId: 'cr1', creator: 'Tech_Nomad', campaign: 'S26 Launch Campaign', status: 'in_progress', startDate: '2026-02-01', milestones: '2/3', nextAction: 'Review draft' },
    { id: 'w2', creatorId: 'cr2', creator: 'Sarah_Vfx', campaign: 'S26 Launch Campaign', status: 'awaiting_approval', startDate: '2026-02-10', milestones: '3/3', nextAction: 'Content submitted' },
    { id: 'w3', creatorId: 'cr4', creator: 'Audio_Wizard', campaign: 'S26 Audio Promo', status: 'in_progress', startDate: '2026-02-05', milestones: '1/2', nextAction: 'First mix due' },
];

export const PAST_COLLABORATIONS = [
    { id: 'p1', creatorId: 'cr1', creator: 'Tech_Nomad', campaign: 'S26 Launch Campaign', completedDate: '2026-01-28', rating: null, performance: 'excellent', rehireable: true },
    { id: 'p2', creatorId: 'cr3', creator: 'Pixel_Artisan', campaign: 'Spring Ad Set', completedDate: '2026-01-15', rating: 5, performance: 'good', rehireable: true },
];
