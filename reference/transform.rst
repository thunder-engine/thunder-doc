.. _api_Transform:

Transform
=========

Inherited: :doc:`Component<api_Component>`

.. _api_Transform_description:

Description
-----------

Every Actor in a Scene has a Transform. It's used to store and manipulate the position, rotation and scale of the object. Every Transform can have a parent, which allows you to apply position, rotation and scale hierarchically.



.. _api_Transform_public:

Public Methods
--------------

+------------------------------------+-------------------------------------------------------------------------------------------------------+
|                               bool | :ref:`dirty<api_Transform_dirty>` () const                                                            |
+------------------------------------+-------------------------------------------------------------------------------------------------------+
|        :ref:`Matrix4<api_Matrix4>` | :ref:`localTransform<api_Transform_localTransform>` () const                                          |
+------------------------------------+-------------------------------------------------------------------------------------------------------+
|  :ref:`Transform<api_Transform>` * | :ref:`parentTransform<api_Transform_parentTransform>` () const                                        |
+------------------------------------+-------------------------------------------------------------------------------------------------------+
|        :ref:`Vector3<api_Vector3>` | :ref:`position<api_Transform_position>` () const                                                      |
+------------------------------------+-------------------------------------------------------------------------------------------------------+
|  :ref:`Quaternion<api_Quaternion>` | :ref:`quaternion<api_Transform_quaternion>` () const                                                  |
+------------------------------------+-------------------------------------------------------------------------------------------------------+
|        :ref:`Vector3<api_Vector3>` | :ref:`rotation<api_Transform_rotation>` () const                                                      |
+------------------------------------+-------------------------------------------------------------------------------------------------------+
|        :ref:`Vector3<api_Vector3>` | :ref:`scale<api_Transform_scale>` () const                                                            |
+------------------------------------+-------------------------------------------------------------------------------------------------------+
|                               void | :ref:`setDirty<api_Transform_setDirty>` (bool  dirty)                                                 |
+------------------------------------+-------------------------------------------------------------------------------------------------------+
|                               void | :ref:`setParentTransform<api_Transform_setParentTransform>` (Transform * parent, bool  force = false) |
+------------------------------------+-------------------------------------------------------------------------------------------------------+
|                               void | :ref:`setPosition<api_Transform_setPosition>` (const Vector3  position)                               |
+------------------------------------+-------------------------------------------------------------------------------------------------------+
|                               void | :ref:`setQuaternion<api_Transform_setQuaternion>` (const Quaternion  quaternion)                      |
+------------------------------------+-------------------------------------------------------------------------------------------------------+
|                               void | :ref:`setRotation<api_Transform_setRotation>` (const Vector3  angles)                                 |
+------------------------------------+-------------------------------------------------------------------------------------------------------+
|                               void | :ref:`setScale<api_Transform_setScale>` (const Vector3  scale)                                        |
+------------------------------------+-------------------------------------------------------------------------------------------------------+
|        :ref:`Vector3<api_Vector3>` | :ref:`worldPosition<api_Transform_worldPosition>` () const                                            |
+------------------------------------+-------------------------------------------------------------------------------------------------------+
|  :ref:`Quaternion<api_Quaternion>` | :ref:`worldQuaternion<api_Transform_worldQuaternion>` () const                                        |
+------------------------------------+-------------------------------------------------------------------------------------------------------+
|        :ref:`Vector3<api_Vector3>` | :ref:`worldRotation<api_Transform_worldRotation>` () const                                            |
+------------------------------------+-------------------------------------------------------------------------------------------------------+
|        :ref:`Vector3<api_Vector3>` | :ref:`worldScale<api_Transform_worldScale>` () const                                                  |
+------------------------------------+-------------------------------------------------------------------------------------------------------+
|        :ref:`Matrix4<api_Matrix4>` | :ref:`worldTransform<api_Transform_worldTransform>` () const                                          |
+------------------------------------+-------------------------------------------------------------------------------------------------------+



.. _api_Transform_static:

Static Methods
--------------

None

.. _api_Transform_methods:

Methods Description
-------------------

.. _api_Transform_dirty:

 bool **Transform::dirty** () const

Returns true if transform has changed; otherwise returns false.

**See also** setDirty().

----

.. _api_Transform_localTransform:

 :ref:`Matrix4<api_Matrix4>` **Transform::localTransform** () const

Returns current transform matrix in local space.

----

.. _api_Transform_parentTransform:

 :ref:`Transform<api_Transform>`* **Transform::parentTransform** () const

Returns parent of the transform.

**See also** setParentTransform().

----

.. _api_Transform_position:

 :ref:`Vector3<api_Vector3>` **Transform::position** () const

Returns current position of the Transform in local space.

**See also** setPosition().

----

.. _api_Transform_quaternion:

 :ref:`Quaternion<api_Quaternion>` **Transform::quaternion** () const

Returns current rotation of the Transform in local space as Quaternion.

**See also** setQuaternion().

----

.. _api_Transform_rotation:

 :ref:`Vector3<api_Vector3>` **Transform::rotation** () const

Returns current rotation of the Transform in local space as Euler angles in degrees.

**See also** setRotation().

----

.. _api_Transform_scale:

 :ref:`Vector3<api_Vector3>` **Transform::scale** () const

Returns current scale of the Transform in local space.

**See also** setScale().

----

.. _api_Transform_setDirty:

 void **Transform::setDirty** (bool  *dirty*)

Marks transform as *dirty*.

**See also** *dirty*().

----

.. _api_Transform_setParentTransform:

 void **Transform::setParentTransform** (:ref:`Transform<api_Transform>` * *parent*, bool  *force* = false)

Changing the *parent* will modify the *parent*-relative position, scale and rotation but keep the world space position, rotation and scale the same. In case of *force* flag provided as true, no recalculations of transform happen.

**See also** *parent*Transform().

----

.. _api_Transform_setPosition:

 void **Transform::setPosition** (:ref:`Vector3<api_Vector3>`  *position*)

Changes *position* of the Transform in local space.

**See also** *position*().

----

.. _api_Transform_setQuaternion:

 void **Transform::setQuaternion** (:ref:`Quaternion<api_Quaternion>`  *quaternion*)

Changes the rotation *quaternion* of the Transform in local space by provided Quaternion.

**See also** *quaternion*().

----

.. _api_Transform_setRotation:

 void **Transform::setRotation** (:ref:`Vector3<api_Vector3>`  *angles*)

Changes the rotation of the Transform in local space by provided Euler *angles* in degrees.

**See also** rotation().

----

.. _api_Transform_setScale:

 void **Transform::setScale** (:ref:`Vector3<api_Vector3>`  *scale*)

Changes the *scale* of the Transform in local space.

**See also** *scale*().

----

.. _api_Transform_worldPosition:

 :ref:`Vector3<api_Vector3>` **Transform::worldPosition** () const

Returns current position of the transform in world space.

----

.. _api_Transform_worldQuaternion:

 :ref:`Quaternion<api_Quaternion>` **Transform::worldQuaternion** () const

Returns current rotation of the transform in world space as Quaternion.

----

.. _api_Transform_worldRotation:

 :ref:`Vector3<api_Vector3>` **Transform::worldRotation** () const

Returns current rotation of the transform in world space as Euler angles in degrees.

----

.. _api_Transform_worldScale:

 :ref:`Vector3<api_Vector3>` **Transform::worldScale** () const

Returns current scale of the transform in world space.

----

.. _api_Transform_worldTransform:

 :ref:`Matrix4<api_Matrix4>` **Transform::worldTransform** () const

Returns current transform matrix in world space.


