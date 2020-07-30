export interface Group {
    count: number,
    items: GroupItem[]
}
export interface GroupItem {
    title: string,
    status: number,
    friendlyUri: string,
    code: number,
    duration: string,
    description: string,
    featuredImageUrl: string,
    audience: null,
    trailerVideoId: string,
    instructorFirstName: null,
    instructorLastName: null,
    avgRating: number,
    price: number,
    discountPrice: number,
    numberOfLearners: number,
    numberOfLessons: number,
    instructor: Iteminstructor,
    categories: ItemCategories,
    slug: string,
    id: string
}

export interface Iteminstructor {
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    profileImageUrl: string,
    fullName: string,
    createdDate: string,
    lastUpdatedDate: string
}

export interface ItemCategories {
    code: number,
    friendlyUri: string,
    id: string,
    name: string,
    featuredImageUrl: null,
    slug: string,
    numberOfCourses: number
}