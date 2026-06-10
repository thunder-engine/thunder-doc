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

+-------------------------------------+-----------------------------------------------------------------+
|         :ref:`TString<api_TString>` | :ref:`name<api_Bone_b15cfe2d>` () const                         |
+-------------------------------------+-----------------------------------------------------------------+
| const :ref:`Vector3<api_Vector3>` & | :ref:`position<api_Bone_5014329e>` () const                     |
+-------------------------------------+-----------------------------------------------------------------+
| const :ref:`Vector3<api_Vector3>` & | :ref:`rotation<api_Bone_98d5e247>` () const                     |
+-------------------------------------+-----------------------------------------------------------------+
| const :ref:`Vector3<api_Vector3>` & | :ref:`scale<api_Bone_df2634be>` () const                        |
+-------------------------------------+-----------------------------------------------------------------+
|                                void | :ref:`setName<api_Bone_cf1a74b2>` (const TString & name)        |
+-------------------------------------+-----------------------------------------------------------------+
|                                void | :ref:`setPosition<api_Bone_0fa39d48>` (const Vector3  position) |
+-------------------------------------+-----------------------------------------------------------------+
|                                void | :ref:`setRotation<api_Bone_906475f1>` (const Vector3  rotation) |
+-------------------------------------+-----------------------------------------------------------------+
|                                void | :ref:`setScale<api_Bone_f73b2059>` (const Vector3  scale)       |
+-------------------------------------+-----------------------------------------------------------------+
|                                bool | :ref:`operator==<api_Bone_17e32b40>` (const Bone & bone) const  |
+-------------------------------------+-----------------------------------------------------------------+



.. _api_Bone_static:

Static Methods
--------------

None

.. _api_Bone_methods:

Methods Description
-------------------

.. _api_Bone_b15cfe2d:

 :ref:`TString<api_TString>`  **Bone::name** () const

Returns the name of the bone.

**See also** setName().

----

.. _api_Bone_5014329e:

const :ref:`Vector3<api_Vector3>` & **Bone::position** () const

Gets the position of the bone.

**See also** setPosition().

----

.. _api_Bone_98d5e247:

const :ref:`Vector3<api_Vector3>` & **Bone::rotation** () const

Gets the rotation of the bone.

**See also** setRotation().

----

.. _api_Bone_df2634be:

const :ref:`Vector3<api_Vector3>` & **Bone::scale** () const

Gets the scale of the bone.

**See also** setScale().

----

.. _api_Bone_cf1a74b2:

 void **Bone::setName** (:ref:`TString<api_TString>` & *name*)

Sets the *name* of the bone.

**See also** name().

----

.. _api_Bone_0fa39d48:

 void **Bone::setPosition** (:ref:`Vector3<api_Vector3>`  *position*)

Sets the *position* of the bone.

**See also** position().

----

.. _api_Bone_906475f1:

 void **Bone::setRotation** (:ref:`Vector3<api_Vector3>`  *rotation*)

Sets the *rotation* of the bone.

**See also** rotation().

----

.. _api_Bone_f73b2059:

 void **Bone::setScale** (:ref:`Vector3<api_Vector3>`  *scale*)

Sets the *scale* of the bone.

**See also** scale().

----

.. _api_Bone_17e32b40:

 bool **Bone::operator==** (:ref:`Bone<api_Bone>` & *bone*) const

Overloaded equality operator for comparing two *bone* objects. Returns true if the bones are equal, false otherwise.


