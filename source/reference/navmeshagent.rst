.. _api_NavMeshAgent:

NavMeshAgent
============

Inherited: :ref:`NativeBehaviour<api_NativeBehaviour>`

.. _api_NavMeshAgent_description:

Description
-----------

A navigation agent finds a path on the navigation mesh and advances its owner along the resulting waypoints. The agent can be controlled by setting a target point with moveTo() or by following another actor with moveToActor().

The agent uses the configured agentType() to select a compatible navigation mesh. Its movement is limited by speed(), acceleration(), and angularSpeed(). When autoBraking() is enabled, the agent slows down near the end of the path. When autoRepath() is enabled, it recalculates the path after detecting a deviation or a stalled movement.



.. _api_NavMeshAgent_public:

Public Methods
--------------

+-------------------------------------------------------------------------+---------------------------------------------------------------------------------+
|                                                                         | :ref:`~NavMeshAgent<api_NavMeshAgent_928547db>` ()                              |
+-------------------------------------------------------------------------+---------------------------------------------------------------------------------+
|                                                                   float | :ref:`acceleration<api_NavMeshAgent_7e869105>` () const                         |
+-------------------------------------------------------------------------+---------------------------------------------------------------------------------+
|                                                                     int | :ref:`agentType<api_NavMeshAgent_2764a15b>` () const                            |
+-------------------------------------------------------------------------+---------------------------------------------------------------------------------+
|                                                                   float | :ref:`angularSpeed<api_NavMeshAgent_da8e4251>` () const                         |
+-------------------------------------------------------------------------+---------------------------------------------------------------------------------+
|                                                                    bool | :ref:`autoBraking<api_NavMeshAgent_4e3b0ac7>` () const                          |
+-------------------------------------------------------------------------+---------------------------------------------------------------------------------+
|                                                                    bool | :ref:`autoRepath<api_NavMeshAgent_b679384a>` () const                           |
+-------------------------------------------------------------------------+---------------------------------------------------------------------------------+
|                                                           Vector3Vector | :ref:`calculatePath<api_NavMeshAgent_534298b7>` (const Vector3 & target)        |
+-------------------------------------------------------------------------+---------------------------------------------------------------------------------+
|                                                                    void | :ref:`destinationReached<api_NavMeshAgent_543ed8c9>` ()                         |
+-------------------------------------------------------------------------+---------------------------------------------------------------------------------+
|                                                                    bool | :ref:`moveTo<api_NavMeshAgent_4d9f37b2>` (const Vector3 & target)               |
+-------------------------------------------------------------------------+---------------------------------------------------------------------------------+
|                                                                    bool | :ref:`moveToActor<api_NavMeshAgent_b352a18e>` (Actor * targetActor)             |
+-------------------------------------------------------------------------+---------------------------------------------------------------------------------+
|                                                     const Vector3Vector | :ref:`path<api_NavMeshAgent_8d5416e3>` () const                                 |
+-------------------------------------------------------------------------+---------------------------------------------------------------------------------+
|                                                                    void | :ref:`pathFailed<api_NavMeshAgent_0f64db23>` ()                                 |
+-------------------------------------------------------------------------+---------------------------------------------------------------------------------+
|                                                                    void | :ref:`pathFound<api_NavMeshAgent_3d9b15c7>` ()                                  |
+-------------------------------------------------------------------------+---------------------------------------------------------------------------------+
|                                                                    void | :ref:`pause<api_NavMeshAgent_4285bdc0>` (bool  paused)                          |
+-------------------------------------------------------------------------+---------------------------------------------------------------------------------+
|                                                                    void | :ref:`setAcceleration<api_NavMeshAgent_9052bcd6>` (float  acceleration)         |
+-------------------------------------------------------------------------+---------------------------------------------------------------------------------+
|                                                                    void | :ref:`setAgentType<api_NavMeshAgent_7ed3c1f2>` (int  type)                      |
+-------------------------------------------------------------------------+---------------------------------------------------------------------------------+
|                                                                    void | :ref:`setAngularSpeed<api_NavMeshAgent_6e2cf5b8>` (float  angularSpeed)         |
+-------------------------------------------------------------------------+---------------------------------------------------------------------------------+
|                                                                    void | :ref:`setAutoBraking<api_NavMeshAgent_dba5fc71>` (bool  autoBraking)            |
+-------------------------------------------------------------------------+---------------------------------------------------------------------------------+
|                                                                    void | :ref:`setAutoRepath<api_NavMeshAgent_0af5361c>` (bool  autoRepath)              |
+-------------------------------------------------------------------------+---------------------------------------------------------------------------------+
|                                                                    void | :ref:`setSpeed<api_NavMeshAgent_5d8a4fb3>` (float  speed)                       |
+-------------------------------------------------------------------------+---------------------------------------------------------------------------------+
|                                                                    void | :ref:`setStoppingDistance<api_NavMeshAgent_6a2b59f7>` (float  stoppingDistance) |
+-------------------------------------------------------------------------+---------------------------------------------------------------------------------+
|                                                                   float | :ref:`speed<api_NavMeshAgent_72afb910>` () const                                |
+-------------------------------------------------------------------------+---------------------------------------------------------------------------------+
|  :ref:`NavMeshAgent::NavigationState<api_NavMeshAgent_NavigationState>` | :ref:`state<api_NavMeshAgent_8947bf30>` () const                                |
+-------------------------------------------------------------------------+---------------------------------------------------------------------------------+
|                                                                    void | :ref:`stop<api_NavMeshAgent_b25dcf91>` ()                                       |
+-------------------------------------------------------------------------+---------------------------------------------------------------------------------+
|                                                                   float | :ref:`stoppingDistance<api_NavMeshAgent_c5a9743f>` () const                     |
+-------------------------------------------------------------------------+---------------------------------------------------------------------------------+
|                                                                    void | :ref:`stuck<api_NavMeshAgent_7fdcb641>` ()                                      |
+-------------------------------------------------------------------------+---------------------------------------------------------------------------------+
|                                     const :ref:`Vector3<api_Vector3>` & | :ref:`target<api_NavMeshAgent_290f3e57>` () const                               |
+-------------------------------------------------------------------------+---------------------------------------------------------------------------------+
|                                                                    void | :ref:`unstuck<api_NavMeshAgent_07d93541>` ()                                    |
+-------------------------------------------------------------------------+---------------------------------------------------------------------------------+
|                                             :ref:`Vector3<api_Vector3>` | :ref:`velocity<api_NavMeshAgent_18daeb02>` () const                             |
+-------------------------------------------------------------------------+---------------------------------------------------------------------------------+
|                                                                    void | :ref:`waypointReached<api_NavMeshAgent_f291e3c8>` ()                            |
+-------------------------------------------------------------------------+---------------------------------------------------------------------------------+

.. _api_NavMeshAgent_enums:

Public Enums
------------

.. _api_NavMeshAgent_NavigationState:

**enum NavMeshAgent::NavigationState**

Describes the current navigation state of the agent.

+---------------------------+-------+-------------------------------------------------------------+
|                  Constant | Value | Description                                                 |
+---------------------------+-------+-------------------------------------------------------------+
|        NavMeshAgent::Idle | 0     | The agent has no active navigation request.                 |
+---------------------------+-------+-------------------------------------------------------------+
|      NavMeshAgent::Moving | 1     | The agent is following the current path.                    |
+---------------------------+-------+-------------------------------------------------------------+
| NavMeshAgent::Pathfinding | 2     | The agent is calculating a path to its target.              |
+---------------------------+-------+-------------------------------------------------------------+
|       NavMeshAgent::Stuck | 3     | The agent has not moved for the configured stuck threshold. |
+---------------------------+-------+-------------------------------------------------------------+
|     NavMeshAgent::Arrived | 4     | The agent has reached its destination.                      |
+---------------------------+-------+-------------------------------------------------------------+



.. _api_NavMeshAgent_static:

Static Methods
--------------

None

.. _api_NavMeshAgent_methods:

Methods Description
-------------------

.. _api_NavMeshAgent_928547db:

**NavMeshAgent::~NavMeshAgent** ()

Destroys the navigation agent and stops its active navigation request.

----

.. _api_NavMeshAgent_7e869105:

 float **NavMeshAgent::acceleration** () const

Returns the maximum movement acceleration in world units per second squared.

**See also** setAcceleration().

----

.. _api_NavMeshAgent_2764a15b:

 int **NavMeshAgent::agentType** () const

Returns the navigation mesh agent type used for pathfinding.

The value selects the agent configuration registered in NavigationSystem.

**See also** setAgentType().

----

.. _api_NavMeshAgent_da8e4251:

 float **NavMeshAgent::angularSpeed** () const

Returns the maximum rotation speed in degrees per second.

**See also** setAngularSpeed().

----

.. _api_NavMeshAgent_4e3b0ac7:

 bool **NavMeshAgent::autoBraking** () const

Returns true when the agent automatically slows down near the end of its path.

**See also** setAutoBraking().

----

.. _api_NavMeshAgent_b679384a:

 bool **NavMeshAgent::autoRepath** () const

Returns true when the agent automatically recalculates a deviated or stalled path.

**See also** setAutoRepath().

----

.. _api_NavMeshAgent_534298b7:

 Vector3Vector **NavMeshAgent::calculatePath** (:ref:`Vector3<api_Vector3>` & *target*)

Calculates a path from the agent's current position to the *target* point.

Returns an empty vector when no path can be found.

**See also** moveTo().

----

.. _api_NavMeshAgent_543ed8c9:

 void **NavMeshAgent::destinationReached** ()

Emitted when the agent reaches its destination.

----

.. _api_NavMeshAgent_4d9f37b2:

 bool **NavMeshAgent::moveTo** (:ref:`Vector3<api_Vector3>` & *target*)

Starts moving the agent to the *target* point.

The request replaces the current path and emits pathFound() when a path is available, or pathFailed() when pathfinding fails.

Returns true after the navigation request has been submitted.

**See also** stop() and moveToActor().

----

.. _api_NavMeshAgent_b352a18e:

 bool **NavMeshAgent::moveToActor** (:ref:`Actor<api_Actor>` * *targetActor*)

Starts moving the agent to the position of targetActor.

Returns false when *targetActor* or its transform is null. Otherwise, returns the result of moveTo().

**See also** moveTo().

----

.. _api_NavMeshAgent_8d5416e3:

const Vector3Vector **NavMeshAgent::path** () const

Returns the current path as a sequence of waypoints.

----

.. _api_NavMeshAgent_0f64db23:

 void **NavMeshAgent::pathFailed** ()

Emitted when pathfinding cannot produce a path to the requested target.

----

.. _api_NavMeshAgent_3d9b15c7:

 void **NavMeshAgent::pathFound** ()

Emitted when a path to the requested target has been found.

----

.. _api_NavMeshAgent_4285bdc0:

 void **NavMeshAgent::pause** (bool  *paused*)

Pauses or resumes movement according to the *paused* value.

While paused, the current path and navigation state are preserved.

----

.. _api_NavMeshAgent_9052bcd6:

 void **NavMeshAgent::setAcceleration** (float  *acceleration*)

Sets the maximum movement *acceleration* in world units per second squared.

The *acceleration* value limits how quickly the movement speed can change.

**See also** acceleration().

----

.. _api_NavMeshAgent_7ed3c1f2:

 void **NavMeshAgent::setAgentType** (int  *type*)

Sets the navigation mesh agent *type* used for pathfinding.

The *type* value is an index of an agent configuration registered in NavigationSystem.

**See also** agentType().

----

.. _api_NavMeshAgent_6e2cf5b8:

 void **NavMeshAgent::setAngularSpeed** (float  *angularSpeed*)

Sets the maximum rotation speed in degrees per second.

The *angularSpeed* value limits rotation in degrees per second.

**See also** angularSpeed().

----

.. _api_NavMeshAgent_dba5fc71:

 void **NavMeshAgent::setAutoBraking** (bool  *autoBraking*)

Enables or disables automatic braking near the end of the path.

When *autoBraking* is true, the agent slows down near the end of the path.

**See also** autoBraking().

----

.. _api_NavMeshAgent_0af5361c:

 void **NavMeshAgent::setAutoRepath** (bool  *autoRepath*)

Enables or disables automatic path recalculation.

When *autoRepath* is true, the agent recalculates a deviated or stalled path.

**See also** autoRepath().

----

.. _api_NavMeshAgent_5d8a4fb3:

 void **NavMeshAgent::setSpeed** (float  *speed*)

Sets the maximum movement *speed* in world units per second.

The *speed* value limits movement to world units per second.

**See also** speed().

----

.. _api_NavMeshAgent_6a2b59f7:

 void **NavMeshAgent::setStoppingDistance** (float  *stoppingDistance*)

Sets the distance at which the agent considers a waypoint reached.

The *stoppingDistance* value specifies the waypoint reach distance in world units.

**See also** stoppingDistance().

----

.. _api_NavMeshAgent_72afb910:

 float **NavMeshAgent::speed** () const

Returns the maximum movement speed in world units per second.

**See also** setSpeed().

----

.. _api_NavMeshAgent_8947bf30:

 :ref:`NavMeshAgent::NavigationState<api_NavMeshAgent::NavigationState>`  **NavMeshAgent::state** () const

Returns the current navigation state.

----

.. _api_NavMeshAgent_b25dcf91:

 void **NavMeshAgent::stop** ()

Stops navigation, clears the current path, and resets the agent velocity.

----

.. _api_NavMeshAgent_c5a9743f:

 float **NavMeshAgent::stoppingDistance** () const

Returns the distance at which the agent considers a waypoint reached.

**See also** setStoppingDistance().

----

.. _api_NavMeshAgent_7fdcb641:

 void **NavMeshAgent::stuck** ()

Emitted when the agent is detected as stuck.

----

.. _api_NavMeshAgent_290f3e57:

const :ref:`Vector3<api_Vector3>` & **NavMeshAgent::target** () const

Returns the current navigation target.

----

.. _api_NavMeshAgent_07d93541:

 void **NavMeshAgent::unstuck** ()

Emitted when a stuck agent starts moving again.

----

.. _api_NavMeshAgent_18daeb02:

 :ref:`Vector3<api_Vector3>`  **NavMeshAgent::velocity** () const

Returns the current movement velocity.

----

.. _api_NavMeshAgent_f291e3c8:

 void **NavMeshAgent::waypointReached** ()

Emitted when the agent reaches a waypoint on its current path.


