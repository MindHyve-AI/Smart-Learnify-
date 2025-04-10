import React from 'react';

const Dashboard = () => {
  // Mock data - in a real app this would come from an API
  const courses = [
    { id: 1, title: 'Introduction to Machine Learning', progress: 65, image: 'https://via.placeholder.com/150' },
    { id: 2, title: 'Advanced JavaScript', progress: 32, image: 'https://via.placeholder.com/150' },
    { id: 3, title: 'Data Structures and Algorithms', progress: 85, image: 'https://via.placeholder.com/150' },
  ];
  
  const recommendations = [
    { id: 4, title: 'Python for Data Science', image: 'https://via.placeholder.com/150' },
    { id: 5, title: 'Web Development Fundamentals', image: 'https://via.placeholder.com/150' },
  ];

  return (
    <div className="container mx-auto py-8">
      {/* Welcome Section */}
      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <h1 className="text-2xl font-bold">Welcome back, Student!</h1>
        <p className="text-gray-600 mt-2">
          Continue your learning journey. You're making excellent progress!
        </p>
      </div>
      
      {/* Progress Summary */}
      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <h2 className="text-xl font-bold mb-4">Your Learning Progress</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="text-blue-600 text-xl font-bold">3</div>
            <div className="text-gray-600">Active Courses</div>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <div className="text-green-600 text-xl font-bold">12</div>
            <div className="text-gray-600">Hours Spent Learning</div>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <div className="text-purple-600 text-xl font-bold">85%</div>
            <div className="text-gray-600">Completion Rate</div>
          </div>
        </div>
      </div>
      
      {/* My Courses */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">My Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div key={course.id} className="bg-white rounded-lg shadow overflow-hidden">
              <img src={course.image} alt={course.title} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="font-bold mb-2">{course.title}</h3>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                  <div 
                    className="bg-primary h-2.5 rounded-full" 
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">{course.progress}% complete</span>
                  <button className="text-primary text-sm font-medium">Continue</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Recommendations */}
      <div>
        <h2 className="text-xl font-bold mb-4">Recommended for You</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recommendations.map((course) => (
            <div key={course.id} className="bg-white rounded-lg shadow overflow-hidden">
              <img src={course.image} alt={course.title} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="font-bold mb-2">{course.title}</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Based on your learning profile and interests.
                </p>
                <button className="text-white bg-primary px-4 py-2 rounded-md text-sm">
                  Explore Course
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 