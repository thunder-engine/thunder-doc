.. _api_NavMeshObstacle:

NavMeshObstacle
===============

Inherited: :ref:`NativeBehaviour<api_NativeBehaviour>`

.. _api_NavMeshObstacle_description:

Description
-----------

A navigation obstacle prevents agents from using the space occupied by its shape. The obstacle can be represented by a cylinder or a box and is automatically re-registered when its transform or geometry changes.



.. _api_NavMeshObstacle_public:

Public Methods
--------------

+------------------------------+---------------------------------------------------------------------+
|                              | :ref:`NavMeshObstacle<api_NavMeshObstacle_af241853>` ()             |
+------------------------------+---------------------------------------------------------------------+
|                              | :ref:`~NavMeshObstacle<api_NavMeshObstacle_15a96dc0>` ()            |
+------------------------------+---------------------------------------------------------------------+
|                        float | :ref:`height<api_NavMeshObstacle_183907fc>` () const                |
+------------------------------+---------------------------------------------------------------------+
|                        float | :ref:`radius<api_NavMeshObstacle_b6c1de54>` () const                |
+------------------------------+---------------------------------------------------------------------+
|                         void | :ref:`registerObstacle<api_NavMeshObstacle_afec4592>` ()            |
+------------------------------+---------------------------------------------------------------------+
|                         void | :ref:`setEnabled<api_NavMeshObstacle_83da0cf7>` (bool  enabled)     |
+------------------------------+---------------------------------------------------------------------+
|                         void | :ref:`setHeight<api_NavMeshObstacle_63a2e79d>` (float  height)      |
+------------------------------+---------------------------------------------------------------------+
|                         void | :ref:`setRadius<api_NavMeshObstacle_48d2615f>` (float  radius)      |
+------------------------------+---------------------------------------------------------------------+
|                         void | :ref:`setShape<api_NavMeshObstacle_397eabc1>` (int  shape)          |
+------------------------------+---------------------------------------------------------------------+
|                         void | :ref:`setSize<api_NavMeshObstacle_5a089d3f>` (const Vector3 & size) |
+------------------------------+---------------------------------------------------------------------+
|                          int | :ref:`shape<api_NavMeshObstacle_29df78a3>` () const                 |
+------------------------------+---------------------------------------------------------------------+
|  :ref:`Vector3<api_Vector3>` | :ref:`size<api_NavMeshObstacle_95108b2f>` () const                  |
+------------------------------+---------------------------------------------------------------------+
|                         void | :ref:`unregisterObstacle<api_NavMeshObstacle_106d9b87>` ()          |
+------------------------------+---------------------------------------------------------------------+
|                         void | :ref:`update<api_NavMeshObstacle_4578a291>` ()                      |
+------------------------------+---------------------------------------------------------------------+

.. _api_NavMeshObstacle_enums:

Public Enums
------------

.. _api_NavMeshObstacle_Shape:

**enum NavMeshObstacle::Shape**

Defines the geometric shape used by the navigation obstacle.

+---------------------------+-------+------------------------------------------------------------+
|                  Constant | Value | Description                                                |
+---------------------------+-------+------------------------------------------------------------+
| NavMeshObstacle::Cylinder | 0     | A cylindrical obstacle described by radius() and height(). |
+---------------------------+-------+------------------------------------------------------------+
|      NavMeshObstacle::Box | 1     | A box obstacle described by size().                        |
+---------------------------+-------+------------------------------------------------------------+



.. _api_NavMeshObstacle_static:

Static Methods
--------------

None

.. _api_NavMeshObstacle_methods:

Methods Description
-------------------

.. _api_NavMeshObstacle_af241853:

**NavMeshObstacle::NavMeshObstacle** ()

Constructs a navigation obstacle with a cylindrical shape.

----

.. _api_NavMeshObstacle_15a96dc0:

**NavMeshObstacle::~NavMeshObstacle** ()

Destroys the navigation obstacle and unregisters it from NavigationSystem.

----

.. _api_NavMeshObstacle_183907fc:

 float **NavMeshObstacle::height** () const

Returns the height of the obstacle.

**See also** setHeight().

----

.. _api_NavMeshObstacle_b6c1de54:

 float **NavMeshObstacle::radius** () const

Returns the radius of a cylindrical obstacle.

**See also** setRadius().

----

.. _api_NavMeshObstacle_afec4592:

 void **NavMeshObstacle::registerObstacle** ()

Registers the obstacle in NavigationSystem when it is not registered yet.

----

.. _api_NavMeshObstacle_83da0cf7:

 void **NavMeshObstacle::setEnabled** (bool  *enabled*)

Reimplements: Component::setEnabled(bool enabled).

Enables or disables the obstacle.

An *enabled* value registers the obstacle in NavigationSystem, while a disabled value removes it from the navigation system while retaining its configuration.

----

.. _api_NavMeshObstacle_63a2e79d:

 void **NavMeshObstacle::setHeight** (float  *height*)

Sets the *height* of the obstacle.

The *height* value sets the new size in world units and re-registers the obstacle in NavigationSystem.

**See also** height().

----

.. _api_NavMeshObstacle_48d2615f:

 void **NavMeshObstacle::setRadius** (float  *radius*)

Sets the *radius* of a cylindrical obstacle.

The *radius* value sets the new size in world units and re-registers the obstacle in NavigationSystem.

**See also** radius().

----

.. _api_NavMeshObstacle_397eabc1:

 void **NavMeshObstacle::setShape** (int  *shape*)

Sets the geometric *shape* of the obstacle.

The *shape* value selects the geometry used by the obstacle. Invalid values are ignored, and a changed value re-registers the obstacle in NavigationSystem.

**See also** shape().

----

.. _api_NavMeshObstacle_5a089d3f:

 void **NavMeshObstacle::setSize** (:ref:`Vector3<api_Vector3>` & *size*)

Sets the *size* of a box-shaped obstacle.

The *size* value sets the box dimensions in world units and re-registers the obstacle in NavigationSystem.

**See also** size().

----

.. _api_NavMeshObstacle_29df78a3:

 int **NavMeshObstacle::shape** () const

Returns the geometric shape of the obstacle.

**See also** setShape().

----

.. _api_NavMeshObstacle_95108b2f:

 :ref:`Vector3<api_Vector3>`  **NavMeshObstacle::size** () const

Returns the size of a box-shaped obstacle.

**See also** setSize().

----

.. _api_NavMeshObstacle_106d9b87:

 void **NavMeshObstacle::unregisterObstacle** ()

Removes the obstacle from NavigationSystem when it is registered.

----

.. _api_NavMeshObstacle_4578a291:

 void **NavMeshObstacle::update** ()

Reimplements: NativeBehaviour::update().

Updates the registered obstacle when its world position changes.


