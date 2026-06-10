.. _api_AnimationClip:

AnimationClip
=============

Inherited: None

.. _api_AnimationClip_description:

Description
-----------

An AnimationClip resource contains keyframe based animation data. The animation data split to a number of tracks that must be connected with the properties of Components. Each track can contain multiple curves or channels like X, Y and Z Which allows them to animate elements independently.



.. _api_AnimationClip_public:

Public Methods
--------------

+------------------------------------------------+-------------------------------------------------------------------------------------+
|                                            int | :ref:`addAnimationTrack<api_AnimationClip_3a45fd6c>` (const AnimationTrack & track) |
+------------------------------------------------+-------------------------------------------------------------------------------------+
|                                            int | :ref:`duration<api_AnimationClip_8caf2e46>` () const                                |
+------------------------------------------------+-------------------------------------------------------------------------------------+
|                                           void | :ref:`removeAnimationTrack<api_AnimationClip_26a35efc>` (int  index)                |
+------------------------------------------------+-------------------------------------------------------------------------------------+
|  :ref:`AnimationTracks<api_AnimationTracks>` & | :ref:`tracks<api_AnimationClip_be2a354d>` ()                                        |
+------------------------------------------------+-------------------------------------------------------------------------------------+



.. _api_AnimationClip_static:

Static Methods
--------------

None

.. _api_AnimationClip_methods:

Methods Description
-------------------

.. _api_AnimationClip_3a45fd6c:

 int **AnimationClip::addAnimationTrack** (:ref:`AnimationTrack<api_AnimationTrack>` & *track*)

Adds animation *track* to current AnimationClip. Returns index of added track;

----

.. _api_AnimationClip_8caf2e46:

 int **AnimationClip::duration** () const

Returns duration of the animation clip in milliseconds.

----

.. _api_AnimationClip_26a35efc:

 void **AnimationClip::removeAnimationTrack** (int  *index*)

Removes animation track at givven index.

----

.. _api_AnimationClip_be2a354d:

 :ref:`AnimationTracks<api_AnimationTracks>` & **AnimationClip::tracks** ()

Returns all tracks associated with current animation clip.


