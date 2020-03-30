.. _api_Transform:
Transform Class
================

Inherited: :ref:`Component<api_Component>`

.. _api_Transform_description:
Description
-----------

Position, rotation and scale of an Actor.

Every Actor in a Scene has a Transform. It's used to store and manipulate the position, rotation and scale of the object. Every Transform can have a parent, which allows you to apply position, rotation and scale hierarchically.



.. _api_Transform_public:
Public Methods
--------------

+-----------------------------------+-------------------------------------------------------------------------------------------------------+
|                                   | :ref:`Transform<api_Transform_Transform>` ()                                                          |
+-----------------------------------+-------------------------------------------------------------------------------------------------------+
|                                   | :ref:`~Transform<api_Transform_~Transform>` ()                                                        |
+-----------------------------------+-------------------------------------------------------------------------------------------------------+
|       :ref:`Vector3<api_Vector3>` | :ref:`euler<api_Transform_euler>` () const                                                            |
+-----------------------------------+-------------------------------------------------------------------------------------------------------+
| :ref:`Transform<api_Transform>` * | :ref:`parentTransform<api_Transform_parentTransform>` () const                                        |
+-----------------------------------+-------------------------------------------------------------------------------------------------------+
|       :ref:`Vector3<api_Vector3>` | :ref:`position<api_Transform_position>` () const                                                      |
+-----------------------------------+-------------------------------------------------------------------------------------------------------+
| :ref:`Quaternion<api_Quaternion>` | :ref:`rotation<api_Transform_rotation>` () const                                                      |
+-----------------------------------+-------------------------------------------------------------------------------------------------------+
|       :ref:`Vector3<api_Vector3>` | :ref:`scale<api_Transform_scale>` () const                                                            |
+-----------------------------------+-------------------------------------------------------------------------------------------------------+
|             :ref:`void<api_void>` | :ref:`setEuler<api_Transform_setEuler>` (const Vector3 & angles)                                      |
+-----------------------------------+-------------------------------------------------------------------------------------------------------+
|             :ref:`void<api_void>` | :ref:`setParentTransform<api_Transform_setParentTransform>` (Transform * parent, bool  force = false) |
+-----------------------------------+-------------------------------------------------------------------------------------------------------+
|             :ref:`void<api_void>` | :ref:`setPosition<api_Transform_setPosition>` (const Vector3 & position)                              |
+-----------------------------------+-------------------------------------------------------------------------------------------------------+
|             :ref:`void<api_void>` | :ref:`setRotation<api_Transform_setRotation>` (const Quaternion & rotation)                           |
+-----------------------------------+-------------------------------------------------------------------------------------------------------+
|             :ref:`void<api_void>` | :ref:`setScale<api_Transform_setScale>` (const Vector3 & scale)                                       |
+-----------------------------------+-------------------------------------------------------------------------------------------------------+
|       :ref:`Vector3<api_Vector3>` | :ref:`worldEuler<api_Transform_worldEuler>` () const                                                  |
+-----------------------------------+-------------------------------------------------------------------------------------------------------+
|       :ref:`Vector3<api_Vector3>` | :ref:`worldPosition<api_Transform_worldPosition>` () const                                            |
+-----------------------------------+-------------------------------------------------------------------------------------------------------+
| :ref:`Quaternion<api_Quaternion>` | :ref:`worldRotation<api_Transform_worldRotation>` () const                                            |
+-----------------------------------+-------------------------------------------------------------------------------------------------------+
|       :ref:`Vector3<api_Vector3>` | :ref:`worldScale<api_Transform_worldScale>` () const                                                  |
+-----------------------------------+-------------------------------------------------------------------------------------------------------+
|     :ref:`Matrix4<api_Matrix4>` & | :ref:`worldTransform<api_Transform_worldTransform>` ()                                                |
+-----------------------------------+-------------------------------------------------------------------------------------------------------+

.. _api_Transform_static:
Static Methods
--------------

+-------------------------------------------------------------------+------------------------------------------------+
|     :ref:`const MetaMethod::Table<api_const MetaMethod::Table>` * | :ref:`methods<api_Transform_methods>` ()       |
+-------------------------------------------------------------------+------------------------------------------------+
| :ref:`const MetaProperty::Table<api_const MetaProperty::Table>` * | :ref:`properties<api_Transform_properties>` () |
+-------------------------------------------------------------------+------------------------------------------------+

.. _api_Transform_methods:
Methods Description
-------------------

.. _api_Transform_Transform:

**Transform::Transform** ()

Default constructs an instance of Transform.

----

.. _api_Transform_~Transform:

**Transform::~Transform** ()

Destroys the instance of Transform. The destructor is virtual.

----

.. _api_Transform_euler:

:ref:`Vector3<api_Vector3>`  **Transform::euler** () const

Returns current rotation of the Transform in local space as Euler angles in degrees.

**See also** setEuler().

----

.. _api_Transform_methods:

:ref:`const MetaMethod::Table<api_const MetaMethod::Table>` * **Transform::methods** ()

----

.. _api_Transform_parentTransform:

:ref:`Transform<api_Transform>` * **Transform::parentTransform** () const

Returns parent of the transform.

**See also** setParentTransform().

----

.. _api_Transform_position:

:ref:`Vector3<api_Vector3>`  **Transform::position** () const

Returns current position of the Transform in local space.

**See also** setPosition().

----

.. _api_Transform_properties:

:ref:`const MetaProperty::Table<api_const MetaProperty::Table>` * **Transform::properties** ()

----

.. _api_Transform_rotation:

:ref:`Quaternion<api_Quaternion>`  **Transform::rotation** () const

Returns current rotation of the Transform in local space as Quaternion.

**See also** setRotation().

----

.. _api_Transform_scale:

:ref:`Vector3<api_Vector3>`  **Transform::scale** () const

Returns current scale of the Transform in local space.

**See also** setScale().

----

.. _api_Transform_setEuler:

:ref:`void<api_void>`  **Transform::setEuler** (:ref:`Vector3<api_Vector3>` & *angles*)

Changes the rotation of the Transform in local space by provided Euler *angles* in degrees.

**See also** euler().

----

.. _api_Transform_setParentTransform:

:ref:`void<api_void>`  **Transform::setParentTransform** (:ref:`Transform<api_Transform>` * *parent*, :ref:`bool<api_bool>`  *force* = false)

Changing the *parent* will modify the *parent*-relative position, scale and rotation but keep the world space position, rotation and scale the same. In case of *force* flag provided as true, no recalculations of transform happen.

**See also** *parent*Transform().

----

.. _api_Transform_setPosition:

:ref:`void<api_void>`  **Transform::setPosition** (:ref:`Vector3<api_Vector3>` & *position*)

Changes *position* of the Transform in local space.

**See also** *position*().

----

.. _api_Transform_setRotation:

:ref:`void<api_void>`  **Transform::setRotation** (:ref:`Quaternion<api_Quaternion>` & *rotation*)

Changes the *rotation* of the Transform in local space by provided Quaternion.

**See also** *rotation*().

----

.. _api_Transform_setScale:

:ref:`void<api_void>`  **Transform::setScale** (:ref:`Vector3<api_Vector3>` & *scale*)

Changes the *scale* of the Transform in local space.

**See also** *scale*().

----

.. _api_Transform_worldEuler:

:ref:`Vector3<api_Vector3>`  **Transform::worldEuler** () const

Returns current rotation of the transform in world space as Euler angles in degrees.

----

.. _api_Transform_worldPosition:

:ref:`Vector3<api_Vector3>`  **Transform::worldPosition** () const

Returns current position of the transform in world space.

----

.. _api_Transform_worldRotation:

:ref:`Quaternion<api_Quaternion>`  **Transform::worldRotation** () const

Returns current rotation of the transform in world space as Quaternion.

----

.. _api_Transform_worldScale:

:ref:`Vector3<api_Vector3>`  **Transform::worldScale** () const

Returns current scale of the transform in world space.

----

.. _api_Transform_worldTransform:

:ref:`Matrix4<api_Matrix4>` & **Transform::worldTransform** ()

Returns current transform matrix in world space.

----


