.. _api_Armature:

Armature
========

Inherited: None

.. _api_Armature_description:

Description
-----------

An armature in Thunder Engine can be thought of as similar to the armature of a real skeleton, and just like a real skeleton. These bones can be moved around and anything that they are attached to or associated with will move and deform in a similar way. An armature uses the Transform component in a child object like a bone structure.



.. _api_Armature_public:

Public Methods
--------------

+--------------------------+---------------------------------------------------------+
|  :ref:`Pose<api_Pose>` * | :ref:`bindPose<api_Armature_c38ad5b2>` () const         |
+--------------------------+---------------------------------------------------------+
|                     void | :ref:`setBindPose<api_Armature_2a5b8ef7>` (Pose * pose) |
+--------------------------+---------------------------------------------------------+



.. _api_Armature_static:

Static Methods
--------------

None

.. _api_Armature_methods:

Methods Description
-------------------

.. _api_Armature_c38ad5b2:

 :ref:`Pose<api_Pose>` * **Armature::bindPose** () const

Returns a bind pose of the bone structure.

**See also** setBindPose().

----

.. _api_Armature_2a5b8ef7:

 void **Armature::setBindPose** (:ref:`Pose<api_Pose>` * *pose*)

Sets a bind (initial) *pose* of the bone structure.

**See also** bindPose().


