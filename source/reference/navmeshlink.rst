.. _api_NavMeshLink:

NavMeshLink
===========

Inherited: :ref:`Component<api_Component>`

.. _api_NavMeshLink_description:

Description
-----------

A navigation link defines a traversable connection between startPoint() and endPoint(). The link can be restricted to a configured agent type and can allow traversal in one or both directions.

Links are useful for navigation routes that are not represented by the regular navigation mesh, such as jumps, doors, or teleport connections.



.. _api_NavMeshLink_public:

Public Methods
--------------

+------------------------------+-------------------------------------------------------------------------+
|                              | :ref:`NavMeshLink<api_NavMeshLink_bc3e2560>` ()                         |
+------------------------------+-------------------------------------------------------------------------+
|                              | :ref:`~NavMeshLink<api_NavMeshLink_e3489571>` ()                        |
+------------------------------+-------------------------------------------------------------------------+
|                          int | :ref:`agentType<api_NavMeshLink_c9247adf>` () const                     |
+------------------------------+-------------------------------------------------------------------------+
|                          int | :ref:`areaType<api_NavMeshLink_09482a35>` () const                      |
+------------------------------+-------------------------------------------------------------------------+
|  :ref:`Vector3<api_Vector3>` | :ref:`endPoint<api_NavMeshLink_c29e6105>` () const                      |
+------------------------------+-------------------------------------------------------------------------+
|                         bool | :ref:`isBidirectional<api_NavMeshLink_cbf24670>` () const               |
+------------------------------+-------------------------------------------------------------------------+
|                         void | :ref:`setAgentType<api_NavMeshLink_7fbd9c23>` (int  type)               |
+------------------------------+-------------------------------------------------------------------------+
|                         void | :ref:`setAreaType<api_NavMeshLink_2fced359>` (int  type)                |
+------------------------------+-------------------------------------------------------------------------+
|                         void | :ref:`setBidirectional<api_NavMeshLink_92fea803>` (bool  bidirectional) |
+------------------------------+-------------------------------------------------------------------------+
|                         void | :ref:`setEndPoint<api_NavMeshLink_b8f9d20e>` (const Vector3 & point)    |
+------------------------------+-------------------------------------------------------------------------+
|                         void | :ref:`setStartPoint<api_NavMeshLink_b7a09dc8>` (const Vector3 & point)  |
+------------------------------+-------------------------------------------------------------------------+
|  :ref:`Vector3<api_Vector3>` | :ref:`startPoint<api_NavMeshLink_4dc6597b>` () const                    |
+------------------------------+-------------------------------------------------------------------------+



.. _api_NavMeshLink_static:

Static Methods
--------------

None

.. _api_NavMeshLink_methods:

Methods Description
-------------------

.. _api_NavMeshLink_bc3e2560:

**NavMeshLink::NavMeshLink** ()

Constructs a navigation link with default endpoints and agent settings.

----

.. _api_NavMeshLink_e3489571:

**NavMeshLink::~NavMeshLink** ()

Destroys the navigation link.

----

.. _api_NavMeshLink_c9247adf:

 int **NavMeshLink::agentType** () const

Returns the navigation mesh agent type allowed to use this link.

**See also** setAgentType().

----

.. _api_NavMeshLink_09482a35:

 int **NavMeshLink::areaType** () const

Returns the navigation area type assigned to this link.

**See also** setAreaType().

----

.. _api_NavMeshLink_c29e6105:

 :ref:`Vector3<api_Vector3>`  **NavMeshLink::endPoint** () const

Returns the local-space end point of the link.

**See also** setEndPoint().

----

.. _api_NavMeshLink_cbf24670:

 bool **NavMeshLink::isBidirectional** () const

Returns true when the link can be traversed in both directions.

----

.. _api_NavMeshLink_7fbd9c23:

 void **NavMeshLink::setAgentType** (int  *type*)

Sets the navigation mesh agent *type* allowed to use this link.

**See also** agentType().

----

.. _api_NavMeshLink_2fced359:

 void **NavMeshLink::setAreaType** (int  *type*)

Sets the navigation area *type* assigned to this link.

**See also** areaType().

----

.. _api_NavMeshLink_92fea803:

 void **NavMeshLink::setBidirectional** (bool  *bidirectional*)

Enables or disables traversal from endPoint() back to startPoint().

When *bidirectional* is false, the link can only be traversed from startPoint() to endPoint().

**See also** isBidirectional().

----

.. _api_NavMeshLink_b8f9d20e:

 void **NavMeshLink::setEndPoint** (:ref:`Vector3<api_Vector3>` & *point*)

Sets the local-space end *point* of the link.

**See also** endPoint().

----

.. _api_NavMeshLink_b7a09dc8:

 void **NavMeshLink::setStartPoint** (:ref:`Vector3<api_Vector3>` & *point*)

Sets the local-space start *point* of the link.

**See also** startPoint().

----

.. _api_NavMeshLink_4dc6597b:

 :ref:`Vector3<api_Vector3>`  **NavMeshLink::startPoint** () const

Returns the local-space start point of the link.

**See also** setStartPoint().


