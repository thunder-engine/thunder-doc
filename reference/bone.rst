.. _api_Bone:

Bone
====

Inherited: None

.. _api_Bone_description:

Description
-----------



.. _api_Bone_public:

Public Methods
--------------

+-------------------------------------+--------------------------------------------------------------------+
|                                 int | :ref:`index<api_Bone_index>` () const                              |
+-------------------------------------+--------------------------------------------------------------------+
| const :ref:`Vector3<api_Vector3>` & | :ref:`position<api_Bone_position>` () const                        |
+-------------------------------------+--------------------------------------------------------------------+
| const :ref:`Vector3<api_Vector3>` & | :ref:`rotation<api_Bone_rotation>` () const                        |
+-------------------------------------+--------------------------------------------------------------------+
| const :ref:`Vector3<api_Vector3>` & | :ref:`scale<api_Bone_scale>` () const                              |
+-------------------------------------+--------------------------------------------------------------------+
|                                void | :ref:`setIndex<api_Bone_setIndex>` (int  index)                    |
+-------------------------------------+--------------------------------------------------------------------+
|                                void | :ref:`setPosition<api_Bone_setPosition>` (const Vector3  position) |
+-------------------------------------+--------------------------------------------------------------------+
|                                void | :ref:`setRotation<api_Bone_setRotation>` (const Vector3  rotation) |
+-------------------------------------+--------------------------------------------------------------------+
|                                void | :ref:`setScale<api_Bone_setScale>` (const Vector3  scale)          |
+-------------------------------------+--------------------------------------------------------------------+
|                                bool | :ref:`operator==<api_Bone_operator==>` (const Bone & bone) const   |
+-------------------------------------+--------------------------------------------------------------------+



.. _api_Bone_static:

Static Methods
--------------

None

.. _api_Bone_methods:

Methods Description
-------------------

.. _api_Bone_index:

 int **Bone::index** () const

Gets the index of the bone.

**See also** setIndex().

----

.. _api_Bone_position:

const :ref:`Vector3<api_Vector3>` & **Bone::position** () const

Gets the position of the bone.

**See also** setPosition().

----

.. _api_Bone_rotation:

const :ref:`Vector3<api_Vector3>` & **Bone::rotation** () const

Gets the rotation of the bone.

**See also** setRotation().

----

.. _api_Bone_scale:

const :ref:`Vector3<api_Vector3>` & **Bone::scale** () const

Gets the scale of the bone.

**See also** setScale().

----

.. _api_Bone_setIndex:

 void **Bone::setIndex** (int  *index*)

Sets the *index* of the bone.

**See also** *index*().

----

.. _api_Bone_setPosition:

 void **Bone::setPosition** (:ref:`Vector3<api_Vector3>`  *position*)

Sets the *position* of the bone.

**See also** *position*().

----

.. _api_Bone_setRotation:

 void **Bone::setRotation** (:ref:`Vector3<api_Vector3>`  *rotation*)

Sets the *rotation* of the bone.

**See also** *rotation*().

----

.. _api_Bone_setScale:

 void **Bone::setScale** (:ref:`Vector3<api_Vector3>`  *scale*)

Sets the *scale* of the bone.

**See also** *scale*().

----

.. _api_Bone_operator==:

 bool **Bone::operator==** (:ref:`Bone<api_Bone>` & *bone*) const

Overloaded equality operator for comparing two *bone* objects. Returns true if the *bone*s are equal, false otherwise.


